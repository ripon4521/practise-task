import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card></Card>
    </>
  )
}

export default App
