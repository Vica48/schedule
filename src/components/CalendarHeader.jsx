const days = [
  { value: 1, label: 'Lunes' },
  { value: 2, label: 'Martes' },
  { value: 3, label: 'Miércoles' },
  { value: 4, label: 'Jueves' },
  { value: 5, label: 'Viernes' },
]

export default function CalendarHeader() {
  return (
    <div className="z-[5] bg-blue-100 border-b-2 border-blue-200 grid grid-cols-[80px_repeat(5,1fr)]">
      <div className="sticky left-0 bg-blue-100 py-4 px-2 text-center font-bold text-blue-900 text-sm">
        Hora
      </div>
      {days.map(d => (
        <div key={d.value} className="py-4 px-2 text-center font-bold text-blue-900 text-sm border-l border-blue-200">
          {d.label}
        </div>
      ))}
    </div>
  )
}
