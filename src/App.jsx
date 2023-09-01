import { useState } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>APPLY NOW</h1>
      <InputForm />
        
    </>
  )
}

export default App
