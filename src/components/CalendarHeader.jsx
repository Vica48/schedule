const days = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miércoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
]

export default function CalendarHeader() {
  const dayColors = ['#FFB6C1', '#98FB98', '#87CEEB', '#DDA0DD', '#F0E68C']
  
  return (
    <div className="z-[5] border-b-4 border-blue-200 grid grid-cols-[80px_repeat(5,1fr)]" 
         style={{ background: 'linear-gradient(135deg, #e0f2fe 0%, #bae6fd 100%)' }}>
      <div className="sticky left-0 py-4 px-2 text-center font-bold text-blue-900 text-sm flex items-center justify-center"
           style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)' }}>
        <span className="mr-1">⏰</span>
        Hora
      </div>
      {days.map((d, index) => (
        <div 
          key={d.value} 
          className="py-4 px-2 text-center font-bold text-blue-900 text-sm border-l-2 border-blue-200 flex items-center justify-center gap-1"
          style={{ 
            background: `linear-gradient(135deg, ${dayColors[index]}40 0%, ${dayColors[index]}20 100%)` 
          }}
        >
          <span className="text-lg">{['📚', '✏️', '📐', '🎨', '🌟'][index]}</span>
          <span>{d.label}</span>
        </div>
      ))}
    </div>
  )
}
