import { useEffect, useRef, useState } from 'react'
import html2canvas from 'html2canvas'
import Header from './components/Header'
import EventForm from './components/EventForm'
import Calendar from './components/Calendar'
import CuteDecorations from './components/CuteDecorations'

function timeToMinutes(t) {
  const [h, m] = t.split(':').map(Number)
  return h * 60 + m
}

// Evento por defecto: Descanso escolar
const getDefaultEvents = () => [
  { id: crypto.randomUUID(), title: 'DESCANSO', day: 1, startMin: 10*60 + 45, endMin: 11*60 + 15, color: '#fbbf24', notes: 'Patio · Recreo' },
  { id: crypto.randomUUID(), title: 'DESCANSO', day: 2, startMin: 10*60 + 45, endMin: 11*60 + 15, color: '#fbbf24', notes: 'Patio · Recreo' },
  { id: crypto.randomUUID(), title: 'DESCANSO', day: 3, startMin: 10*60 + 45, endMin: 11*60 + 15, color: '#fbbf24', notes: 'Patio · Recreo' },
  { id: crypto.randomUUID(), title: 'DESCANSO', day: 4, startMin: 10*60 + 45, endMin: 11*60 + 15, color: '#fbbf24', notes: 'Patio · Recreo' },
  { id: crypto.randomUUID(), title: 'DESCANSO', day: 5, startMin: 10*60 + 45, endMin: 11*60 + 15, color: '#fbbf24', notes: 'Patio · Recreo' },
]

export default function App(){
  const [title, setTitle] = useState('')
  const [day, setDay] = useState(1)
  const [color, setColor] = useState('#a7f3d0')
  const [start, setStart] = useState('07:00')
  const [end, setEnd] = useState('08:00')
  const [notes, setNotes] = useState('')

  const [events, setEvents] = useState(() => {
    // Cargar eventos desde localStorage o usar demo inicial
    const savedEvents = localStorage.getItem('scheduleEvents')
    if (savedEvents) {
      try {
        return JSON.parse(savedEvents)
      } catch (error) {
        console.warn('Error loading saved events:', error)
      }
    }
    
    // Demo inicial para nuevos usuarios
    return getDefaultEvents()
  })

  const calendarWrapRef = useRef(null)
  const colsRef = useRef({}) // map day -> ref to column

  // Agregar materia
  const onAdd = () => {
    const t = title.trim() || 'Materia'
    let s = timeToMinutes(start || '07:00')
    let e = timeToMinutes(end || '08:00')
    if (e <= s) e = s + 60

    setEvents(prev => [
      ...prev,
      { id: crypto.randomUUID(), title: t, day: Number(day), startMin: s, endMin: e, color, notes: notes.trim() }
    ])
    setTitle('')
    setNotes('')
  }

  const onClear = () => {
    if (confirm('¿Eliminar todas las materias del horario escolar?')) {
      setEvents([])
      
      // Ofrecer restaurar materias por defecto después de un momento
      setTimeout(() => {
        if (confirm('¿Quieres restaurar las materias de ejemplo?')) {
          setEvents(getDefaultEvents())
        }
      }, 500)
    }
  }

  const onDeleteEvent = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId))
  }

  const onRestoreDefaults = () => {
    if (confirm('¿Restaurar las materias de ejemplo? Esto agregará materias de muestra sin eliminar las actuales.')) {
      setEvents(prev => [...prev, ...getDefaultEvents()])
    }
  }

  // Exportar a PNG
  const onExport = async () => {
    const wrap = calendarWrapRef.current
    if (!wrap) {
      alert('No se pudo encontrar el calendario para exportar.')
      return
    }
    
    try {
      const canvas = await html2canvas(wrap, { 
        backgroundColor: '#ffffff', 
        scale: 2,
        useCORS: true,
        allowTaint: false,
        logging: false,
        letterRendering: true,
        imageTimeout: 0,
        removeContainer: true
      })

      // Crear y descargar
      const link = document.createElement('a')
      link.download = 'horario-escolar.png'
      link.href = canvas.toDataURL('image/png', 0.95)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

    } catch (error) {
      console.error('Error detallado:', error)
      
      // Método alternativo: capturar solo el contenido visible
      try {
        const simpleCanvas = await html2canvas(wrap, { 
          backgroundColor: '#ffffff',
          scale: 1,
          logging: false
        })
        
        const link = document.createElement('a')
        link.download = 'horario-escolar.png'
        link.href = simpleCanvas.toDataURL('image/png')
        link.click()
        
      } catch (fallbackError) {
        console.error('Error en método alternativo:', fallbackError)
        alert('No se pudo generar la imagen. Intenta usar la captura de pantalla del navegador (Ctrl+Shift+S o Cmd+Shift+4)')
      }
    }
  }

  // Guardar eventos en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('scheduleEvents', JSON.stringify(events))
  }, [events])

  // Re-pintar al redimensionar (para recalcular alturas)
  useEffect(() => {
    const onR = () => { /* trigger re-render */ setEvents(e => [...e]) }
    window.addEventListener('resize', onR)
    return () => window.removeEventListener('resize', onR)
  }, [])

  return (
    <>
      <CuteDecorations />
      <Header onExport={onExport} onClear={onClear} onRestoreDefaults={onRestoreDefaults} />

      <main className="grid grid-cols-[360px_1fr] max-lg:grid-cols-1 gap-6 p-6 max-w-6xl w-full mx-auto relative z-[5] mt-12">
        <EventForm
          title={title}
          setTitle={setTitle}
          day={day}
          setDay={setDay}
          color={color}
          setColor={setColor}
          start={start}
          setStart={setStart}
          end={end}
          setEnd={setEnd}
          notes={notes}
          setNotes={setNotes}
          onAdd={onAdd}
        />

        <Calendar
          events={events}
          colsRef={colsRef}
          calendarWrapRef={calendarWrapRef}
          onDeleteEvent={onDeleteEvent}
        />
      </main>
    </>
  )
}
