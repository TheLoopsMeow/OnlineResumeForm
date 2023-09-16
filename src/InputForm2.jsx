import React from "react"
import InputForm from "./InputForm"
import App from "./App"
import {BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"
import {useContext, useState} from "react"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"
import {FilledOutFormContext} from "./App"

function InputForm2() {
    let {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)

    let {formComplete, setFormComplete} = useContext(FormCompleteContext) 
    const [pleaseComplete, setPleaseComplete] = useState("")
    let {filledOutForm, setFilledOutForm} = useContext(FilledOutFormContext)
    const [newResumeName, setName] = useState("")
    const [newResumeEmail, setEmail ] = useState("")
    const [newResumePhone, setPhone ] = useState("")
    const [schoolName, setSchool ] = useState("")
    const [degree, setDegree ] = useState("")
    const [graduationDate, setDate ] = useState("")
    const [priorEmployer, setEmployer ] = useState("")
    const [position, setPosition ] = useState("")
    const [employmentDates, setDates ] = useState("")
    const [infoComplete, setInfoComplete] = useState(false)
 

    function handleButton (e) {
        e.preventDefault()
        
        if (newResumeName && newResumeEmail && newResumePhone && schoolName && degree && graduationDate && priorEmployer && position && employmentDates) {
        setFormComplete(true)
        const tempObj = {
            name: newResumeName,
            email: newResumeEmail,
            phone: newResumePhone,
            school: schoolName,
            degree: degree,
            graduationDate: graduationDate,
            priorEmployer: priorEmployer,
            position: position,
            employmentDate: employmentDates
        }
        //call the function to set the employee object
        handleSetEmployeeInfo(tempObj)
        }
        else {
            handleSetIncomplete()
            setPleaseComplete(<p id="pleaseComplete">Please fill all fields.</p>)
            
        }
    }

    function handleSetIncomplete() {
        setFormComplete(false)
    }
        
    function handleSetEmployeeInfo (tempObj) {
        setEmployeeInfo(tempObj)

        }

    function handleName (e) {
        e.preventDefault()
        setName(e.target.value)
    }

    function handleEmail (e) {
        e.preventDefault()
        setEmail(e.target.value)

    }

    function handlePhone (e) {
        e.preventDefault()
        setPhone(e.target.value)
    }

    function handleSchool (e) {
        e.preventDefault()
        setSchool(e.target.value)
    }
    function handleDegree (e) {
        e.preventDefault()
        setDegree(e.target.value)
    }
    function handleCollegeDate (e) {
        e.preventDefault()
        setDate(e.target.value)
    }

    function handleEmployer (e) {
        e.preventDefault()
        setEmployer(e.target.value)
    }
    function handlePosition (e) {
        e.preventDefault()
        setPosition(e.target.value)
    }
    function handleDates (e) {
        e.preventDefault()
        setDates(e.target.value)
    }

function initializeForm (filledOutForm) {
    if(filledOutForm){
        setName(employeeInfo.name) 
        setEmail(employeeInfo.email)
        setPhone(employeeInfo.phone) 
        setSchool(employeeInfo.school) 
        setDegree(employeeInfo.degree) 
        setDate(employeeInfo.graduationDate) 
        setEmployer(employeeInfo.priorEmployer) 
        setPosition(employeeInfo.position) 
        setDates(employeeInfo.employmentDate)
        setFilledOutForm(false)
    }
}        
 

    return (        
        <>
        {/* {initializeForm(filledOutForm)} */}
        <span>
        <form >
        Personal Information:
        <br></br>
        You entered: {employeeInfo.name}
        <br></br>
        <input type="text" value={newResumeName} name="newResumeName" onChange={(e)=>{handleName(e)}} placeholder="Name"></input>
        <br></br>
        You entered: {employeeInfo.email}
        <br></br>
        <input onChange={(e)=>{handleEmail(e)}} type="text" value={newResumeEmail} placeholder="Email"></input>
        <br></br>
        You entered: {employeeInfo.phone}
        <br></br>
        <input onChange={(e)=>{handlePhone(e)}} type="text" value={newResumePhone} placeholder="Phone"></input>
        <br></br>

        Education:
        <br></br>
        You entered: {employeeInfo.school}
        <br></br>
        <input onChange={(e)=>{handleSchool(e)}} type="text" value={schoolName} placeholder="School"></input>
        <br></br>
        You entered: {employeeInfo.degree}
        <br></br>
        <input onChange={(e)=>{handleDegree(e)}} type="text" value={degree} placeholder="Degree received"></input>
        <br></br>
        You entered: {employeeInfo.graduationDates}
        <br></br>
        <input onChange={(e)=>{handleCollegeDate(e)}} type="text" value={graduationDate} placeholder="Year of graduation"></input>
        <br></br>

        Prior Experience:
        <br></br>
        You entered: {employeeInfo.priorEmployer}
        <br></br>
        <input onChange={(e)=>{handleEmployer(e)}} type="text" value={priorEmployer} placeholder="Past employer name"></input>
        <br></br>
        You entered: {employeeInfo.position}
        <br></br>
        <input onChange={(e)=>{handlePosition(e)}} type="text" value={position} placeholder="Position held"></input>
        <br></br>
        <br></br>
        You entered: {employeeInfo.employmentDates}
        <br></br>
        <textarea onChange={(e)=>{handleDates(e)}} type="text" value={employmentDates} placeholder="Please describe the job duties."></textarea>
        <br></br>
        
        <button type="submit" onClick={(e)=>handleButton(e)}>
            {formComplete?<Link to="/ReviewForm" ><p>Apply</p></Link>: <p>Apply</p>}
        </button>
        </form>
        </span>
        {pleaseComplete}
        </>
        
  
    )
}

export default InputForm2 