import React, { useState } from 'react'

const buttons = [
  '7','8','9','/',
  '4','5','6','*',
  '1','2','3','-',
  '0','.','=','+',
]

export default function Calculator() {
  const [display, setDisplay] = useState('0')

  const input = (val) => {
    if (val === '=') {
      try {
        const result = eval(display)
        setDisplay(String(result))
      } catch {
        setDisplay('Error')
      }
      return
    }

    if (display === '0' && val !== '.') {
      setDisplay(val)
      return
    }

    if (display === 'Error') {
      if (/[0-9.]/.test(val)) setDisplay(val)
      else setDisplay('0')
      return
    }

    setDisplay(prev => prev + val)
  }

  const clear = () => setDisplay('0')
  const back = () => setDisplay(prev => (prev.length <= 1 ? '0' : prev.slice(0, -1)))

  return (
    <div className="calculator">
      <div className="display" data-testid="display">{display}</div>
      <div className="controls">
        <button className="wide" onClick={clear}>C</button>
        <button onClick={back}>⌫</button>
        {buttons.map((b) => (
          <button key={b} onClick={() => input(b)} className={b === '=' ? 'equals' : ''}>
            {b}
          </button>
        ))}
      </div>
    </div>
  )
}
