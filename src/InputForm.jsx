import React from "react"
import {useState, useContext} from "react"
import ReviewForm from "./ReviewForm"
import App from "./App"
import {EmployeeInfoContext} from "./App"
import {FormCopmleteContext} from "./App"

const styles = {
    color: "pink",
    display: "inline-block",

}

const styles2 = {
    align: "right"
}

const largeInput = {
    width: "10em",
    height: "10em",
    textAlign: "bottom",
    backgroundColor: "pink",
    color: "black",
    textAlign: "left", 
    verticalAlign: "top",
    padding: "2px, 2px",
    margin: "2px, 2px"
}

function InputForm ({setEmployeeInfo, setFormComplete}) {

    let {employeeInfo} = useContext(EmployeeInfoContext)
    let {formComplete} = useContext(FormCopmleteContext) 
    
    

    if(employeeInfo){
        console.log(employeeInfo)
    }
    const [pleaseComplete, setPleaseComplete] = useState("")
    
   
    function handleSetIncomplete() {
        setFormComplete(false)
      
        setPleaseComplete("Please complete all fields.")
    }
    

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
        setPleaseComplete("")
        
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

    function handleSetEmployeeInfo () {
        setEmployeeInfo(tempObj)
        }

        //call the function to set the employee object
        handleSetEmployeeInfo()
        
        }

       else {handleSetIncomplete()}
       
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
        
        <span style={styles}>
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
        <textarea onChange={(e)=>{handleDates(e)}} style={largeInput} type="text" value={employmentDates} placeholder="When did you work there?"></textarea>
        <br></br>
        <button type="submit" onClick={(e)=>handleButton(e)}>Apply</button>
        </form>
        </span>
         <div style={{color: "red"}}>{pleaseComplete}</div>
         <span>
        </span>
        </>
        
    )
}
export default InputForm



