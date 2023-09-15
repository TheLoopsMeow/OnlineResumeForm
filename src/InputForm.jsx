import React from "react"
import {useState, useContext} from "react"
import ReviewForm from "./ReviewForm"
import App from "./App"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"
import {BrowserRouter, Route, Routes, Link } from "react-router-dom"


function InputForm () {


    let {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)
    let {formComplete, setFormComplete} = useContext(FormCompleteContext) 
    const [pleaseComplete, setPleaseComplete] = useState("")


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
        else {handleSetIncomplete()}
    }

    function handleSetIncomplete() {
        setFormComplete(false)
    }
        
    function handleSetEmployeeInfo (tempObj) {
        setEmployeeInfo(tempObj)
        console.log(employeeInfo)
        console.log(employeeInfo)

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
 
    // employeeInfo.name
    // employeeInfo.email
    // employeeInfo.phone
    // employeeInfo.school
    // employeeInfo.degree
    // employeeInfo.graduationDate
    // employeeInfo.priorEmployer
    // employeeInfo.position
    // employeeInfo.employmentDates
        <>

        <span>
        <form >
        Personal Information:
        <br></br>
        <input type="text" value={newResumeName} onChange={(e)=>{handleName(e)}} placeholder="Name"></input>
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
        <input onChange={(e)=>{handleCollegeDate(e)}} type="text" value={graduationDate} placeholder="When did you graduate?"></input>
        <br></br>

        Prior Experience:
        <br></br>
        <input onChange={(e)=>{handleEmployer(e)}} type="text" value={priorEmployer} placeholder="Past employer name"></input>
        <br></br>
        <input onChange={(e)=>{handlePosition(e)}} type="text" value={position} placeholder="Position held"></input>
        <br></br>
        <br></br>
        <textarea onChange={(e)=>{handleDates(e)}} type="text" value={employmentDates} placeholder="When did you work there?"></textarea>
        <br></br>
        
        <button type="submit" onClick={(e)=>handleButton(e)}>
        <Link to="/ReviewForm" >
        Apply
        </Link>
        </button>
        
        </form>
        </span>
         <span>
        </span>
        </>
        
    )
}
export default InputForm



