import React from "react"
import InputForm from "./InputForm"
import App from "./App"
import {BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"
import {useContext} from "react"
import {EmployeeInfoContext} from "./App"
import {FormCompleteContext} from "./App"


function ReviewForm() {
    let {employeeInfo, setEmployeeInfo} = useContext(EmployeeInfoContext)
    let {formComplete, setFormComplete} = useContext(FormCompleteContext) 

    console.log(employeeInfo)

    return(
        <>
        <form>
            <span>
                
                <br></br>
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
            <button>
            <Link to="/">
            Edit
            </Link>
            </button>
        </form>
        {formComplete?<button>Submit</button>: null}

        </>
    )
}

export default ReviewForm 