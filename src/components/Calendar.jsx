import { useMemo } from 'react'
import CalendarHeader from './CalendarHeader'
import EventBox from './EventBox'
import Legend from './Legend'

const START_HOUR = 8
const END_HOUR = 13

const days = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miércoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
]

export default function Calendar({ events, colsRef, calendarWrapRef, onDeleteEvent }) {
  const hours = useMemo(() => {
    return ['8:00', '9:00', '10:00', '11:00', '11:30', '12:30', '13:30']
  }, [])

  // Leyenda (única por par color|título)
  const legendChips = useMemo(() => {
    const seen = new Set()
    return events.filter(e => {
      const key = `${e.color}|${e.title}`
      if (seen.has(key)) return false
      seen.add(key)
      return true
    })
  }, [events])

  return (
    <section 
      className="bg-white border-2 border-blue-200 rounded-2xl overflow-hidden relative shadow-lg" 
      ref={calendarWrapRef} 
      aria-label="Horario Escolar"
    >
      <CalendarHeader />

      <div className="grid grid-cols-[80px_repeat(5,1fr)] calendar-grid">
        <div className="flex flex-col border-r-2 border-blue-200 hours-column">
          {hours.map((h, i) => (
            <div 
              key={i}
              className="h-[60px] border-b border-blue-200 text-blue-800 text-sm font-semibold pr-3 flex items-center justify-end bg-blue-50"
            >
              {h}
            </div>
          ))}
        </div>

        {days.map(d => (
          <div
            className="relative border-r border-blue-200 last:border-r-0 day-column bg-blue-25"
            data-day={d.value}
            key={d.value}
            ref={el => { if (el) colsRef.current[d.value] = el }}
          >
            {hours.map((_, i) => (
              <div className="h-[60px] border-b border-blue-200" key={i} />
            ))}
            {events.filter(e => e.day === d.value).map(e => (
              <EventBox key={e.id} evt={e} events={events} colsRef={colsRef} onDeleteEvent={onDeleteEvent} />
            ))}
          </div>
        ))}
      </div>

      <Legend legendChips={legendChips} />
      
      <div className="py-3 px-4 text-center text-blue-600 text-sm bg-blue-50">
        💡 Tip: Descarga tu horario escolar para imprimirlo o compartirlo
      </div>
    </section>
  )
}
