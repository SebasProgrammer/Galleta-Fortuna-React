import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import users from './data/users.json'

function App() {

  const fondos = ["/fondo0.jpg", "/fondo1.jpg","/fondo2.jpg","/fondo3.jpg"]
  const [idx, setIdx] = useState( 0 )
  const [idxColor, setIndexColor] = useState(0)

  const changeUser = () => {
    //Preguntar por qué al quitar el else ya no funciona.
    if (users.length-1 === idx) {setIdx(0)}
    else {
      setIdx(idx+1)
      setIndexColor(idx%4)
    }
  }

  return (
    <div className="App" style = {{ backgroundImage: `url(${fondos[idxColor]})` }}>
      <h1>Galletas de la Fortuna</h1>
      <Card className='Card' user={users[idx]}/>
      <button className='Button' onClick={changeUser}>Click</button>
      
    </div>
  )
}

export default App
