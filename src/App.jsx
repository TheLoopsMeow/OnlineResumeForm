import { useState } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Router, Route, Link } from "react-router-dom"


function App() {
  const [count, setCount] = useState(0)
  const [incomplete, setIncomplete] = useState(true)
  const [employeeInfo, setEmployeeInfo] = useState()


  if(incomplete){
  return (
    <>
      <h1>APPLY NOW</h1>
      <InputForm  incomplete={incomplete} setIncomplete={setIncomplete} employeeInfo={employeeInfo} setEmployeeInfo={setEmployeeInfo}/>
    </>
  )
  }
  else if (!incomplete){
   

    return(
      <>
      <h1>Please review before submitting:</h1>
      <ReviewForm employeeInfo={employeeInfo}/>
      </>
    )
   
  }
}

export default App
