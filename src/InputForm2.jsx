import React from "react"
import InputForm from "./InputForm"
import App from "./App"
import {BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"
import {useContext, useState} from "react"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"
import {FilledOutFormContext} from "./App"
import "./App.css"
import "./index.css"

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
    const [initializedForm, setInitializedForm] = useState("")

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
 

    return (        
        <>
  
        <span id="inputform">
        <p>Please update:</p>
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
            <Link to="/ReviewForm" ><p>Apply</p></Link>
        </button>
        <button><Link to="/"><p>Start Over</p></Link></button>
        </form>
    
        {pleaseComplete}
        </span>
  

        <span id="inputform">
                
                <br></br>
                You entered:
                <br></br>
                <div>Personal Information:</div>
               
                <div>{employeeInfo.name}</div>
                <div>{employeeInfo.email}</div>
                <div>{employeeInfo.phone}</div>

                <br></br>
                <div>Education:</div>
                <div>{employeeInfo.school}</div>
                <div>{employeeInfo.degree}</div>
                <div>{employeeInfo.graduationDate}</div>

                <br></br>
                <div>Prior Experience:</div>
                <div>{employeeInfo.priorEmployer}</div>
                <div>{employeeInfo.position}</div>
                <div>{employeeInfo.employmentDate}</div>
                <br></br>
            </span>
    
        </>
       

    )

}


export default InputForm2 


