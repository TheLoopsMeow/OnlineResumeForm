import { useState, createContext, useEffect } from 'react'
import './App.css'
import InputForm from "./InputForm"
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
  const [quotes, setQuotes] = useState()
  const [randomQuote, setRandomQuote] = useState(1)
  const randomNumber = Math.floor(Math.random() * 10);
  let authorArray = []

  useEffect(()=>{
      fetch(`https://type.fit/api/quotes/`)
      .then((r)=>r.json())
      .then((r)=>{
          setQuotes(r[randomNumber])
      })
      .then()
  }, [])

  function createAuthor (){
    
    let string = quotes.author
    
    if(quotes){
      authorArray = string.split(",")
      console.log(authorArray)
    }
  }

  return (
    <>
    <BrowserRouter>
    <FilledOutFormContext.Provider value={{filledOutForm, setFilledOutForm}} >
      <FormCompleteContext.Provider  value={{formComplete, setFormComplete}} >
      <EmployeeInfoContext.Provider value={{employeeInfo, setEmployeeInfo}} >
          <h1>APPLY NOW</h1>
          <p id="quote">"{quotes?quotes.text:null}"</p>
          {quotes?createAuthor():null}
          <p id="quote">-{quotes?authorArray[0]:null}</p>
            <Routes>
            <Route path="/" exact element={<InputForm />} />
            <Route path="/ReviewForm" exact element={<ReviewForm />} />
          </Routes>
          </EmployeeInfoContext.Provider >
        </FormCompleteContext.Provider >
        </FilledOutFormContext.Provider>
      </BrowserRouter>
    </>
  )

}

export default App
