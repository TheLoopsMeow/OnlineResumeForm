import { useState } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Router, Route, Link } from "react-router-dom"


function App() {

  const [employeeInfo, setEmployeeInfo] = useState()



  return (
    <>
      <h1>APPLY NOW</h1>
      <InputForm employeeInfo={employeeInfo}/>
      {employeeInfo?<ReviewForm employeeInfo={employeeInfo} /> : null}
    </>
  )

}

export default App
