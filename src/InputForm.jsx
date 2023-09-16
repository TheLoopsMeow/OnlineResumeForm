import React from "react"
import {useState} from "react"
import {useContext} from "react"
import ReviewForm from "./ReviewForm"
import App from "./App"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"
import {FilledOutFormContext} from "./App"

function InputForm () {

    let {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)
    let {formComplete, setFormComplete} = useContext(FormCompleteContext) 
    const [pleaseComplete, setPleaseComplete] = useState("")
    let {filledOutForm, setFilledOutForm} = useContext(FilledOutFormContext)
    const [newResumeName, setName] = useState(employeeInfo.name)
    const [newResumeEmail, setEmail ] = useState(employeeInfo.email)
    const [newResumePhone, setPhone ] = useState(employeeInfo.phone)
    const [schoolName, setSchool ] = useState(employeeInfo.school)
    const [degree, setDegree ] = useState(employeeInfo.degree)
    const [graduationDate, setDate ] = useState(employeeInfo.graduationDate)
    const [priorEmployer, setEmployer ] = useState(employeeInfo.priorEmployer)
    const [position, setPosition ] = useState(employeeInfo.position)
    const [employmentDates, setDates ] = useState(employeeInfo.employmentDate) 

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
            setPleaseComplete(<p id="pleaseComplete">Please complete all fields.</p>)
            
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
 

    return (        
        <>
        <span id="inputform">
        <form >
        Personal Information:
        <br></br>
        <input type="text" value={newResumeName} name="newResumeName" onChange={(e)=>{handleName(e)}} placeholder="Name"></input>
        <br></br>
        <input onChange={(e)=>{handleEmail(e)}} type="text" value={newResumeEmail} placeholder="Email"></input>
        <br></br>
        <input onChange={(e)=>{handlePhone(e)}} type="text" value={newResumePhone} placeholder="Phone"></input>
        <br></br>

        Education:
        <br></br>
        <input onChange={(e)=>{handleSchool(e)}} type="text" value={schoolName} placeholder="School"></input>
        <br></br>
        <input onChange={(e)=>{handleDegree(e)}} type="text" value={degree} placeholder="Degree received"></input>
        <br></br>
        <input onChange={(e)=>{handleCollegeDate(e)}} type="text" value={graduationDate} placeholder="Year of graduation"></input>
        <br></br>

        Prior Experience:
        <br></br>
        <input onChange={(e)=>{handleEmployer(e)}} type="text" value={priorEmployer} placeholder="Past employer name"></input>
        <br></br>
        <input onChange={(e)=>{handlePosition(e)}} type="text" value={position} placeholder="Position held"></input>
        <br></br>
        <br></br>
        <textarea onChange={(e)=>{handleDates(e)}} type="text" value={employmentDates} placeholder="Please describe the job duties."></textarea>
        <br></br>
        
        <button type="submit" onClick={(e)=>handleButton(e)}>
            Looks good!
        </button>
        <br></br>
        {formComplete?<Link to="/ReviewForm" >Apply</Link>: null}
        
        <br></br>
        </form>
        {pleaseComplete}
        </span>
        
        </>
        
  
    )
    
}
export default InputForm



