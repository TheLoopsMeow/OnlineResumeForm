import { useState, createContext } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"

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
// console.log(employeeInfo.name)

function App() {

  const [employeeInfo, setEmployeeInfo] = useState({
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
  const [formComplete, setFormComplete] = useState(false)

console.log(employeeInfo.name)
  return (
    <>
    <BrowserRouter>
      <FormCopmleteContext.Provider  value={formComplete} />
      <EmployeeInfoContext.Provider value={employeeInfo} />
      <h1>APPLY NOW</h1>
        <Routes>
      
          <Route path="/" element={<InputForm setEmployeeInfo={setEmployeeInfo} setFormComplete={setFormComplete}/>} />
          <Route path="/ReviewForm" element={<ReviewForm employeeInfo={employeeInfo} formcomplete={formComplete}/>} />
            </Routes>
      
          <EmployeeInfoContext.Provider />
        <FormCopmleteContext.Provider />
      </BrowserRouter>
    </>
  )

}

export default App
