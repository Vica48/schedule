function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v))
}

function escapeHtml(s) {
  return String(s || '').replace(/[&<>"']/g, c => ({
    '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;', '\'':'&#39;'
  })[c])
}

function minutesToLabel(min) {
  const h = Math.floor(min / 60)
  const m = min % 60
  return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`
}

const START_HOUR = 8
const END_HOUR = 13

export default function EventBox({ evt, events, colsRef, onDeleteEvent }) {
  const colEl = colsRef.current[evt.day]
  const colH = colEl?.clientHeight ?? 0
  const totalMinutes = (END_HOUR - START_HOUR) * 60

  const startClamped = clamp(evt.startMin, START_HOUR * 60, END_HOUR * 60)
  const endClamped = clamp(evt.endMin, START_HOUR * 60, END_HOUR * 60)
  const top = ((startClamped - START_HOUR * 60) / totalMinutes) * colH
  const height = Math.max(18, ((endClamped - startClamped) / totalMinutes) * colH)

  // Distribución simple para overlaps (n lanes por columna)
  // Calculamos lanes por día de forma naive (O(n^2) simple y suficiente)
  const dayEvents = events.filter(e => e.day === evt.day).sort((a,b)=>a.startMin-b.startMin)
  const lanes = []
  dayEvents.forEach(e => {
    let placed = false
    for (const lane of lanes) {
      if (lane[lane.length - 1].endMin <= e.startMin) { lane.push(e); placed = true; break }
    }
    if (!placed) lanes.push([e])
  })
  const laneIndex = lanes.findIndex(lane => lane.includes(evt))
  const laneCount = lanes.length
  const gap = 6
  const width = colEl ? (colEl.clientWidth - gap * (laneCount + 1)) / laneCount : 120
  const left = gap + (width + gap) * laneIndex

  const startLabel = minutesToLabel(evt.startMin)
  const endLabel = minutesToLabel(evt.endMin)

  const style = {
    top, 
    height, 
    width: Math.max(60, width), 
    left, 
    background: evt.color
  }

  return (
    <div 
      className="group absolute rounded-xl p-2 shadow-lg shadow-black/25 overflow-hidden border border-black/25 flex flex-col gap-1 hover:z-10"
      style={style} 
      title={`${evt.title} (${startLabel}–${endLabel})`}
    >
      <button
        onClick={(e) => {
          e.stopPropagation()
          onDeleteEvent(evt.id)
        }}
        className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 border border-red-400"
        title="Eliminar evento"
      >
        ×
      </button>
      <h4 
        className="m-0 text-sm text-slate-900 font-medium pr-4" 
        dangerouslySetInnerHTML={{ __html: escapeHtml(evt.title) }} 
      />
      <p className="m-0 text-xs text-slate-900/75">
        <small className="text-xs opacity-70">{startLabel}–{endLabel}</small>
        {evt.notes ? <> · <span dangerouslySetInnerHTML={{ __html: escapeHtml(evt.notes) }} /></> : null}
      </p>
    </div>
  )
}
