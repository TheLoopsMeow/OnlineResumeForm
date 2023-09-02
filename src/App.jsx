import { useState } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"


function App() {
  const [count, setCount] = useState(0)
  const [incomplete, setIncomplete] = useState(true)

  if(incomplete){
  return (
    <>
    <h1>APPLY NOW</h1>
      <InputForm incomplete={incomplete} setIncomplete={setIncomplete} />
    </>
  )
  }
  else if (!incomplete){
    <>
    return(
      <ReviewForm />
    )
    </>
  }
}

export default App
