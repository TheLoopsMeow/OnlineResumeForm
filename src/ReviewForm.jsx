import React from "react"
import InputForm from "./InputForm"
import App from "./App"
import {BrowserRouter, RouterProvider, Route, Routes, Link } from "react-router-dom"



const styles4 = {
    color: "pink"
}
function ReviewForm({employeeInfo, formComplete}) {
    function handleDone () {
        
    }
    return(
        <>
        <form>
            <span>
                
                <br></br>
                <br></br>
                <div style={styles4}>Personal Information:</div>
               
                <div>{employeeInfo.name}</div>
                <div>{employeeInfo.email}</div>
                <div>{employeeInfo.phone}</div>

                <br></br>
                <div style={styles4}>Education:</div>
                <div>{employeeInfo.school}</div>
                <div>{employeeInfo.degree}</div>
                <div>{employeeInfo.graduationDate}</div>

                <br></br>
                <div style={styles4}>Prior Experience:</div>
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
        </>
    )
}

export default ReviewForm 