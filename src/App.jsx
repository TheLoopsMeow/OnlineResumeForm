import { useState, createContext } from 'react'
import './App.css'
import InputForm from "./InputForm"
import ReviewForm from "./ReviewForm"
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"
import InputForm2 from "./InputForm2"

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
            <Route path="/" exact element={<InputForm />} />
            <Route path="/ReviewForm" exact element={<ReviewForm />} />
            <Route path="/InputForm2" exact element={<InputForm2 />} />
          </Routes>
          </EmployeeInfoContext.Provider >
        </FormCompleteContext.Provider >
        </FilledOutFormContext.Provider>
      </BrowserRouter>
    </>
  )

}

export default App
