import React from "react"
import InputForm from "./InputForm"
import App from "./App"
import {BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"
import {useContext} from "react"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"
import {FilledOutFormContext} from "./App"



function ReviewForm() {
    let {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)
    let {formComplete, setFormComplete} = useContext(FormCompleteContext) 
    const {filledOutForm, setFilledOutForm} = useContext(FilledOutFormContext);
    
    console.log(employeeInfo)

    return(
        <>
        <form id="inputform">
            <span id="form">
                
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
 
            <span><Link to="/"><p>EDIT</p></Link></span>

        </form>

        </>
    )
}

export default ReviewForm 