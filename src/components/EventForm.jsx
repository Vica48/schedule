const days = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miércoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
]

export default function EventForm({
  title,
  setTitle,
  day,
  setDay,
  color,
  setColor,
  start,
  setStart,
  end,
  setEnd,
  notes,
  setNotes,
  onAdd
}) {
  return (
    <section
      className="bg-white border-2 border-blue-200 rounded-2xl p-4 shadow-lg"
      aria-label="Agregar materia"
    >
      <h2 className="text-base font-bold text-blue-900 m-0 mb-3">
        📝 Agregar Materia
      </h2>

      <div className="grid grid-cols-1 gap-3 mb-3">
        <div>
          <label 
            htmlFor="title" 
            className="block text-sm font-medium text-blue-800 mb-1.5"
          >
            📚 Materia
          </label>
          <input
            id="title"
            placeholder="Matemáticas, Español, Ciencias…"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl px-3 py-2.5 outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="day" className="block text-sm font-medium text-blue-800 mb-1.5">
            📅 Día
          </label>
          <select
            id="day"
            value={day}
            onChange={e => setDay(Number(e.target.value))}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl px-3 py-2.5 outline-none focus:border-blue-400 focus:bg-white"
          >
            {days.map(d => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="color" className="block text-sm font-medium text-blue-800 mb-1.5">
            🎨 Color
          </label>
          <input
            id="color"
            type="color"
            value={color}
            onChange={e => setColor(e.target.value)}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl p-1 h-11 outline-none focus:border-blue-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-3">
        <div>
          <label htmlFor="start" className="block text-sm font-medium text-blue-800 mb-1.5">
            🕐 Hora inicio
          </label>
          <input
            id="start"
            type="time"
            value={start}
            onChange={e => setStart(e.target.value)}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl px-3 py-2.5 outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>
        <div>
          <label htmlFor="end" className="block text-sm font-medium text-blue-800 mb-1.5">
            🕐 Hora fin
          </label>
          <input
            id="end"
            type="time"
            value={end}
            onChange={e => setEnd(e.target.value)}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl px-3 py-2.5 outline-none focus:border-blue-400 focus:bg-white"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-3">
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-blue-800 mb-1.5">
            📍 Lugar / Profesor
          </label>
          <textarea
            id="notes"
            placeholder="Aula 201, Maestra Carmen"
            value={notes}
            onChange={e => setNotes(e.target.value)}
            className="w-full bg-blue-50 border-2 border-blue-200 text-blue-900 rounded-xl px-3 py-2.5 outline-none focus:border-blue-400 focus:bg-white min-h-15 resize-y"
          />
        </div>
      </div>

      <div className="flex gap-2 items-center justify-between mt-3">
        <div className="text-sm text-blue-600">
          💡 Usa colores diferentes para cada materia
        </div>
        <button
          onClick={onAdd}
          className="bg-green-400 text-white border-0 px-6 py-3 rounded-full font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 shadow-md"
        >
          ➕ Agregar
        </button>
      </div>
    </section>
  )
}
