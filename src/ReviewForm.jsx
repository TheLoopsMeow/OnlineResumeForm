import React from "react"
import InputForm from "./InputForm"
import App from "./App"


const styles4 = {
    color: "pink"
}
function ReviewForm(employeeInfo) {
    
    function handleDone () {
        
    }

    function handleEdit () {
        e.preventDefault()
        return(
        <>
        <h1>APPLY NOW</h1>
        <InputForm employeeInfo={employeeInfo} setEmployeeInfo={setEmployeeInfo}/>
      </>
        )
    }

    return(
        <>
        <form>
            <span>
                
                <br></br>
                <br></br>
                <div style={styles4}>Personal Information:</div>
                <br></br>
                <div>{employeeInfo.employeeInfo.name}</div>
                <div>{employeeInfo.employeeInfo.email}</div>
                <div>{employeeInfo.employeeInfo.phone}</div>

                <br></br>
                <div style={styles4}>Education:</div>
                <div>{employeeInfo.employeeInfo.school}</div>
                <div>{employeeInfo.employeeInfo.degree}</div>
                <div>{employeeInfo.employeeInfo.graduationDate}</div>

                <br></br>
                <div style={styles4}>Prior Experience:</div>
                <div>{employeeInfo.employeeInfo.priorEmployer}</div>
                <div>{employeeInfo.employeeInfo.position}</div>
                <div>{employeeInfo.employeeInfo.employmentDate}</div>
                <br></br>
            </span>
            <button onClick={handleEdit}>Edit</button>
            <button>Submit</button>
        </form>
        </>
    )
}

export default ReviewForm 