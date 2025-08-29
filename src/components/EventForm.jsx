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
      className="bg-white border-4 border-blue-300 rounded-3xl p-6 shadow-2xl relative overflow-hidden"
      aria-label="Agregar materia"
      style={{
        background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.15)',
      }}
    >
      {/* Cute decorations */}
      <div className="absolute top-2 right-2 text-2xl opacity-20 animate-pulse">✨</div>
      <div className="absolute bottom-2 left-2 text-xl opacity-15 animate-bounce">🌟</div>
      
      <div className="text-center mb-4">
        <h2 className="text-lg font-bold text-blue-900 m-0 flex items-center justify-center gap-2">
          <span className="animate-bounce">📝</span>
          <span>Agregar Materia</span>
          <span className="animate-bounce animation-delay-500">📚</span>
        </h2>
        <div className="text-xs text-blue-600 mt-1 opacity-75">¡Crea tu horario cute!</div>
      </div>

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
            className="w-full bg-gradient-to-r from-blue-50 to-pink-50 border-3 border-blue-300 text-blue-900 rounded-2xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
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
            className="w-full border-3 border-blue-300 text-blue-900 rounded-2xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
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
            className="w-full border-3 border-blue-300 text-blue-900 rounded-2xl p-2 h-12 outline-none focus:border-pink-400 transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
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
            className="w-full border-3 border-blue-300 text-blue-900 rounded-2xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
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
            className="w-full border-3 border-blue-300 text-blue-900 rounded-2xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
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
            className="w-full border-3 border-blue-300 text-blue-900 rounded-2xl px-4 py-3 outline-none focus:border-pink-400 focus:bg-white min-h-15 resize-y transition-all duration-200 shadow-inner"
            style={{
              background: 'linear-gradient(135deg, #f0f9ff 0%, #fdf2f8 100%)'
            }}
          />
        </div>
      </div>

      <div className="flex gap-2 items-center justify-between mt-3">
        <div className="text-sm text-blue-600 flex items-center gap-1">
          <span className="animate-bounce">💡</span>
          <span>Usa colores cute para cada materia</span>
          <span className="animate-bounce animation-delay-1000">🎨</span>
        </div>
        <button
          onClick={onAdd}
          className="text-white border-0 px-6 py-3 rounded-full font-bold cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
            boxShadow: '0 8px 16px rgba(16, 185, 129, 0.3)'
          }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="animate-pulse">✨</span>
            <span>Agregar</span>
            <span className="animate-pulse animation-delay-500">🌟</span>
          </span>
        </button>
      </div>
    </section>
  )
}
