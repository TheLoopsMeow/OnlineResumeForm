import { useState, createContext } from 'react'
import './App.css'
import InputForm from "./InputForm"
import "./inputFormCSS.css"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"

export const FormCompleteContext = createContext(false)

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
export const FilledOutFormContext = createContext()


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
  const [filledOutForm, setFilledOutForm] = useState(false)


  return (
    <>
    <BrowserRouter>
    <FilledOutFormContext.Provider value={{filledOutForm, setFilledOutForm}} >
      <FormCompleteContext.Provider  value={{formComplete, setFormComplete}} >
      <EmployeeInfoContext.Provider value={{employeeInfo, setEmployeeInfo}} >
          <h1>APPLY NOW</h1>
            <Routes>
        {/* setEmployeeInfo={setEmployeeInfo} setFormComplete={setFormComplete} */}
            <Route path="/" element={<InputForm />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
          </Routes>
          </EmployeeInfoContext.Provider >
        </FormCompleteContext.Provider >
        </FilledOutFormContext.Provider>
      </BrowserRouter>
    </>
  )

}

export default App
