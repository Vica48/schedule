import { useMemo } from 'react'
import CalendarHeader from './CalendarHeader'
import EventBox from './EventBox'
import Legend from './Legend'

const START_HOUR = 7
const END_HOUR = 13

const days = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miércoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
]

export default function Calendar({ events, colsRef, onDeleteEvent }) {
  const hours = useMemo(() => {
    return ['7:00', '8:00', '9:00', '10:00', '11:00', '11:30', '12:30', '13:30']
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
      className="bg-white border-4 border-blue-300 rounded-3xl overflow-visible relative shadow-2xl cute-calendar"
      aria-label="Horario Escolar"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        border: '4px solid transparent',
        backgroundClip: 'padding-box',
        position: 'relative'
      }}
    >
      {/* Cute title decoration */}
      <div className="flex justify-center py-4">
        <div className="bg-white px-6 py-3 rounded-full border-4 border-blue-300 shadow-2xl" 
             style={{ 
               background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
               boxShadow: '0 10px 30px rgba(59, 130, 246, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.1)'
             }}>
          <h2 className="text-xl font-bold text-blue-900 m-0 flex items-center gap-2 whitespace-nowrap text-center">
            <span className="animate-bounce text-2xl">📚</span>
            <span>Horario Escolar</span>
            <span className="animate-bounce animation-delay-500 text-2xl">✏️</span>
          </h2>
        </div>
      </div>

      {/* Calendar border decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-visible">
        {/* Top border emojis */}
        <div className="absolute -top-4 left-16 text-3xl animate-bounce animation-delay-1000 transform -rotate-12">📝</div>
        <div className="absolute -top-6 left-32 text-2xl animate-bounce animation-delay-1500 transform rotate-12">🖍️</div>
        <div className="absolute -top-4 right-32 text-3xl animate-bounce animation-delay-500 transform rotate-6">📐</div>
        <div className="absolute -top-6 right-16 text-2xl animate-bounce animation-delay-2000 transform -rotate-6">🍎</div>
        
        {/* Left border emojis */}
        <div className="absolute -left-6 top-24 text-3xl animate-bounce animation-delay-1000 transform rotate-12">✂️</div>
        <div className="absolute -left-4 top-40 text-2xl animate-bounce animation-delay-1500 transform -rotate-12">📏</div>
        <div className="absolute -left-6 top-56 text-3xl animate-bounce animation-delay-500 transform rotate-6">🖊️</div>
        
        {/* Right border emojis */}
        <div className="absolute -right-6 top-24 text-3xl animate-bounce animation-delay-2000 transform -rotate-12">🔍</div>
        <div className="absolute -right-4 top-40 text-2xl animate-bounce animation-delay-1000 transform rotate-12">📊</div>
        <div className="absolute -right-6 top-56 text-3xl animate-bounce animation-delay-1500 transform -rotate-6">🎨</div>
        
        {/* Bottom border emojis */}
        <div className="absolute -bottom-6 left-20 text-3xl animate-bounce animation-delay-500 transform rotate-12">📒</div>
        <div className="absolute -bottom-4 left-40 text-2xl animate-bounce animation-delay-1000 transform -rotate-12">🖇️</div>
        <div className="absolute -bottom-6 right-40 text-3xl animate-bounce animation-delay-1500 transform rotate-6">📎</div>
        <div className="absolute -bottom-4 right-20 text-2xl animate-bounce animation-delay-2000 transform -rotate-6">🏫</div>
        
        {/* Corner emojis */}
        <div className="absolute -top-6 -left-6 text-4xl animate-bounce animation-delay-1500 transform rotate-12">📚</div>
        <div className="absolute -top-6 -right-6 text-4xl animate-bounce animation-delay-1000 transform -rotate-12">✏️</div>
        <div className="absolute -bottom-6 -left-6 text-4xl animate-bounce animation-delay-2000 transform -rotate-12">📋</div>
        <div className="absolute -bottom-6 -right-6 text-4xl animate-bounce animation-delay-500 transform rotate-12">🌟</div>
      </div>
      
      <CalendarHeader />

      <div className="grid grid-cols-[80px_repeat(5,1fr)] calendar-grid">
        <div className="flex flex-col border-r-4 border-blue-200 hours-column">
          {hours.map((h, i) => (
            <div 
              key={i}
              className="h-[60px] border-b-2 border-blue-200 text-blue-800 text-sm font-semibold pr-3 flex items-center justify-end relative"
              style={{ 
                background: `linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)`,
                borderRight: '4px solid #bfdbfe'
              }}
            >
              <span className="mr-2 text-xs opacity-50">⏰</span>
              {h}
              {i === 0 && (
                <div className="absolute left-1 top-1 text-xs opacity-20">☀️</div>
              )}
              {i === 3 && (
                <div className="absolute left-1 top-1 text-xs opacity-20">🌤️</div>
              )}
              {i === 6 && (
                <div className="absolute left-1 top-1 text-xs opacity-20">🌅</div>
              )}
            </div>
          ))}
        </div>

        {days.map((d, dayIndex) => {
          const dayColors = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C']
          return (
            <div
              className="relative border-r-2 border-blue-200 last:border-r-0 day-column"
              data-day={d.value}
              key={d.value}
              ref={el => { if (el) colsRef.current[d.value] = el }}
              style={{ 
                background: `linear-gradient(135deg, ${dayColors[dayIndex]}05 0%, #ffffff 100%)` 
              }}
            >
              {hours.map((_, i) => (
                <div 
                  className="h-[60px] border-b-2 border-blue-200 relative" 
                  key={i}
                  style={{
                    background: i % 2 === 0 
                      ? `linear-gradient(135deg, ${dayColors[dayIndex]}08 0%, transparent 100%)`
                      : 'transparent'
                  }}
                >
                  {i === 0 && (
                    <div className="absolute top-1 right-1 text-xs opacity-30">
                      {['📚', '✏️', '📐', '🎨', '🌟'][dayIndex]}
                    </div>
                  )}
                  {i === 6 && ( // Last row - add bottom decorative emojis
                    <div className="absolute bottom-1 left-1 text-xs opacity-20">
                      {['📝', '🖍️', '📏', '✂️', '🍎'][dayIndex]}
                    </div>
                  )}
                </div>
              ))}
              {events.filter(e => e.day === d.value).map(e => (
                <EventBox key={e.id} evt={e} events={events} colsRef={colsRef} onDeleteEvent={onDeleteEvent} />
              ))}
            </div>
          )
        })}
      </div>

      <Legend legendChips={legendChips} />
      
      <div className="py-4 px-4 text-center text-blue-600 text-sm relative overflow-hidden"
           style={{ 
             background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
             borderTop: '2px solid #bfdbfe'
           }}>
        <span className="inline-flex items-center gap-2">
          <span className="animate-pulse">🌟</span>
          <span className="font-semibold">¡Descarga tu cute horario escolar!</span>
          <span className="animate-pulse">✨</span>
        </span>
        <div className="text-xs mt-1 opacity-75">
          Para imprimir o compartir con tus amigos 📚✏️
        </div>
        
        {/* Decorative elements in footer */}
        <div className="absolute -top-2 left-4 text-xl opacity-20 animate-bounce">🍎</div>
        <div className="absolute -top-1 right-8 text-lg opacity-20 animate-bounce animation-delay-1000">📏</div>
        <div className="absolute -top-2 left-1/3 text-sm opacity-15 animate-bounce animation-delay-500">✂️</div>
        <div className="absolute -top-1 right-1/3 text-lg opacity-20 animate-bounce animation-delay-1500">🖍️</div>
      </div>
    </section>
  )
}
