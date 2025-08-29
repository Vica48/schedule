import { useEffect, useState } from 'react'

const schoolSupplies = [
  { emoji: '✏️', color: '#FFD700' },
  { emoji: '📏', color: '#90EE90' },
  { emoji: '🍎', color: '#FF6347' },
  { emoji: '📐', color: '#FFA500' },
  { emoji: '🖍️', color: '#FF69B4' },
  { emoji: '📒', color: '#87CEEB' },
  { emoji: '✂️', color: '#DDA0DD' },
  { emoji: '🔍', color: '#40E0D0' },
  { emoji: '📊', color: '#98FB98' },
  { emoji: '🖊️', color: '#FA8072' },
  { emoji: '📝', color: '#F0E68C' },
  { emoji: '🎨', color: '#FF1493' }
]

export default function CuteDecorations() {
  const [decorations, setDecorations] = useState([])

  useEffect(() => {
    const generateDecorations = () => {
      const newDecorations = []
      
      // Top decorations
      for (let i = 0; i < 6; i++) {
        const supply = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)]
        newDecorations.push({
          id: `top-${i}`,
          ...supply,
          style: {
            top: '80px',
            left: `${15 + i * 12}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }
        })
      }
      
      // Left decorations
      for (let i = 0; i < 4; i++) {
        const supply = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)]
        newDecorations.push({
          id: `left-${i}`,
          ...supply,
          style: {
            top: `${200 + i * 120}px`,
            left: '20px',
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }
        })
      }
      
      // Right decorations
      for (let i = 0; i < 4; i++) {
        const supply = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)]
        newDecorations.push({
          id: `right-${i}`,
          ...supply,
          style: {
            top: `${200 + i * 120}px`,
            right: '20px',
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }
        })
      }
      
      // Bottom decorations
      for (let i = 0; i < 5; i++) {
        const supply = schoolSupplies[Math.floor(Math.random() * schoolSupplies.length)]
        newDecorations.push({
          id: `bottom-${i}`,
          ...supply,
          style: {
            bottom: '20px',
            left: `${20 + i * 15}%`,
            transform: `rotate(${Math.random() * 30 - 15}deg)`
          }
        })
      }
      
      setDecorations(newDecorations)
    }

    generateDecorations()
  }, [])

  return (
    <>
      {decorations.map((decoration) => (
        <div
          key={decoration.id}
          className="cute-decoration"
          style={{
            ...decoration.style,
            filter: `drop-shadow(2px 2px 4px rgba(0,0,0,0.1))`,
            fontSize: '2.5rem',
          }}
        >
          {decoration.emoji}
        </div>
      ))}
    </>
  )
}
