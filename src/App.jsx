import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h2>{100 + 100}</h2>
      <Button texto="Aceptar"/>
      <Button texto="Cancelar"/>
      <Button texto="Submit"/>
      <Card title="La incondicional" album="desconocido" band = "Luis Miguel" 
      fecha="desconocido" genero= "Romántica"/>
      <Card title="desconocido" album="desconocido" band = "desconocido" 
      fecha="desconocido" genero= "desconocido"/>
    </div>
  )
}

export default App
