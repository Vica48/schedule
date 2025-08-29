export default function Header({ onExport, onClear, onRestoreDefaults }) {
  return (
    <header 
      className="sticky top-0 z-10 px-5 py-4 flex items-center justify-between gap-3 border-b-4 border-blue-300 shadow-lg"
      style={{
        background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <h1 className="text-2xl font-bold text-blue-900 m-0 flex items-center gap-2">
        <span className="animate-bounce">🍎</span>
        <span>Horario Escolar</span>
        <span className="animate-bounce animation-delay-500">📚</span>
      </h1>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={onExport}
          className="text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #fb923c 0%, #fdba74 100%)',
            boxShadow: '0 8px 16px rgba(251, 146, 60, 0.3)'
          }}
        >
          📷 Descargar
        </button>
        <button
          onClick={() => window.print()}
          className="text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #a855f7 0%, #c084fc 100%)',
            boxShadow: '0 8px 16px rgba(168, 85, 247, 0.3)'
          }}
        >
          🖨️ Imprimir
        </button>
        <button
          onClick={onRestoreDefaults}
          className="text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            boxShadow: '0 8px 16px rgba(236, 72, 153, 0.3)'
          }}
        >
          ✨ Ejemplos
        </button>
        <button
          onClick={onClear}
          className="text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-all duration-200 ease-out hover:-translate-y-1 hover:scale-105 shadow-lg"
          style={{
            background: 'linear-gradient(135deg, #ef4444 0%, #f87171 100%)',
            boxShadow: '0 8px 16px rgba(239, 68, 68, 0.3)'
          }}
        >
          🗑️ Limpiar
        </button>
      </div>
    </header>
  )
}
