export default function Header({ onExport, onClear, onRestoreDefaults }) {
  return (
    <header className="sticky top-0 z-10 px-5 py-4 flex items-center justify-between gap-3 bg-blue-50 border-b-2 border-blue-200 shadow-sm">
      <h1 className="text-2xl font-bold text-blue-900 m-0">
        🍎 Horario Escolar 📚
      </h1>
      <div className="flex gap-2 flex-wrap">
        <button
          onClick={onExport}
          className="bg-orange-400 text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 shadow-md"
        >
          📷 Descargar
        </button>
        <button
          onClick={() => window.print()}
          className="bg-purple-400 text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 shadow-md"
        >
          🖨️ Imprimir
        </button>
        <button
          onClick={onRestoreDefaults}
          className="bg-pink-400 text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 shadow-md"
        >
          ✨ Ejemplos
        </button>
        <button
          onClick={onClear}
          className="bg-red-400 text-white border-0 px-4 py-2.5 rounded-full font-bold cursor-pointer transition-transform duration-200 ease-out hover:-translate-y-0.5 shadow-md"
        >
          🗑️ Limpiar
        </button>
      </div>
    </header>
  )
}
