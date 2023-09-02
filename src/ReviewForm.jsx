import React from "react"
import InputForm from "./InputForm"

// {newResumeName, newResumeEmail, newResumePhone, schoolName, degree, graduationDate, priorEmployer, position, employmentDates}

function ReviewForm(props) {
    console.log("In Review form")
    return(
        <>
            <span>
                Please review before submitting:
                <br></br>
                Personal Information:
                <br></br>
                <div>{props.name}</div>
                <div></div>
                <div></div>

                Education:
                <br></br>
                <div></div>
                <div></div>
                <div></div>

                Prior Experience:
                <br></br>
                <div></div>
                <div></div>
                <div></div>
                <br></br>

            </span>
        </>
    )
}

export default ReviewForm 