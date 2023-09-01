import React from "react"
import {useState} from "react"
import ReviewForm from "./ReviewForm"

const styles = {
    color: "pink",
    display: "inline-block",

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

function InputForm () {

    const [pleaseComplete, setPleaseComplete] = useState("")
    const [incomplete, setIncomplete] = useState(true)
   
    function handleSetIncomplete() {
        setIncomplete(true)
        console.log("in handle set incomplete")
        console.log(incomplete)
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
    let [employeeInfo, setEmployeeInfo] = useState([])
    

    function handleButton (e) {
        e.preventDefault()

        if (newResumeName && newResumeEmail && newResumePhone && schoolName && degree && graduationDate && priorEmployer && position && employmentDates) {
            
        setIncomplete(false)
        setPleaseComplete("")


        const tempArray = []

        tempArray.push(newResumeName)
        tempArray.push(newResumeEmail)
        tempArray.push(newResumePhone)
        tempArray.push(schoolName)
        tempArray.push(degree)
        tempArray.push(graduationDate)
        tempArray.push(priorEmployer)
        tempArray.push(position)
        tempArray.push(employmentDates)

        setEmployeeInfo(employeeInfo = [...tempArray])

        console.log(employeeInfo)
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
        <ReviewForm newResumeName={newResumeName} newResumeEmail={newResumeEmail} newResumePhone={newResumePhone} schoolName={schoolName} degree={degree} graduationDate={graduationDate} priorEmployer={priorEmployer} position={position} employmentDates={employmentDates}/>
        </span>
        </>


    )
}
export default InputForm