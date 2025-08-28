export default function Legend({ legendChips }) {
  return (
    <div className="flex gap-2 flex-wrap p-3 border-t-2 border-blue-200 text-sm text-blue-800 bg-blue-50">
      {legendChips.map(e => (
        <div 
          key={`${e.color}|${e.title}`} 
          className="flex items-center gap-2 bg-white border-2 border-blue-200 px-3 py-2 rounded-full shadow-sm"
        >
          <i 
            className="w-3 h-3 rounded-sm inline-block" 
            style={{ background: e.color }} 
          />
          <span>{e.title}</span>
        </div>
      ))}
    </div>
  )
}
