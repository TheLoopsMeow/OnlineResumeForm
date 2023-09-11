import { useState, createContext } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Router, Route, Link } from "react-router-dom"

export const FormCopmleteContext = createContext(false)

export const EmployeeInfoContext = createContext({
  name: "",
  email: "",
  phone: "",
  school: "",
  degree: "",
  graduationDate: "",
  priorEmployer: "",
  position: "",
  employmentDate: ""
})


function App() {

  const [employeeInfo, setEmployeeInfo] = useState({})
  const [formComplete, setFormComplete] = useState(false)


  return (
    <>
      <FormCopmleteContext.Provider  value={formComplete} />
      <EmployeeInfoContext.Provider value={employeeInfo} />
      <h1>APPLY NOW</h1>
      <InputForm setEmployeeInfo={setEmployeeInfo} setFormComplete={setFormComplete}/>
      {/* {setTimeout(()=>{console.log(formComplete)}, 1000)} */}
      {formComplete?<ReviewForm employeeInfo={employeeInfo} /> : null}
      <EmployeeInfoContext.Provider />
      <FormCopmleteContext.Provider />
    </>
  )

}

export default App
