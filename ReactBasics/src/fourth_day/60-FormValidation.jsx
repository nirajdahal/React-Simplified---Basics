import React, { useMemo, useState } from 'react'
//Learned about form validation
const Tutorial60 = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isAfterFirstSubmit, setisAfterFirstSubmit] = useState(false)
    // const [inputError, setInputError] = useState([])
    // const [passwordError, setPasswordError] = useState([])
    //  useEffect(() => {
    //     setInputError(() => isAfterFirstSubmit ? checkEmail(email) : [])
    // }, [isAfterFirstSubmit, email])
    //  useEffect(() => {
    //     setPasswordError(() => isAfterFirstSubmit ? checkPassword(password) : [])
    // }, [isAfterFirstSubmit, password])
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     setisAfterFirstSubmit(true)
    //     console.log(inputErrors)
    //     if (inputErrors == [] && passwordErrors == []) {
    //         alert("success")
    //     }
    // }
    const inputErrors = useMemo(() => {
        return isAfterFirstSubmit ? checkEmail(email) : []
    }, [isAfterFirstSubmit, email])
    const passwordErrors = useMemo(() => {
        return isAfterFirstSubmit ? checkPassword(password) : []
    }, [isAfterFirstSubmit, password])
    const handleSubmit = (e) => {
        e.preventDefault()
        setisAfterFirstSubmit(true)
        console.log(inputErrors)
        if (inputErrors == [] && passwordErrors == []) {
            alert("success")
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='email'>Email:  </label>
                <input type="email" required placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                {isAfterFirstSubmit && (inputErrors != []) && <span style={{ color: 'red' }}>{JSON.stringify(inputErrors)}</span>}
                <br />
                <label htmlFor='password'>Password: </label>
                <input type="password" placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                {isAfterFirstSubmit && (passwordErrors != []) && <span style={{ color: 'red' }}>{JSON.stringify(passwordErrors)}</span>}
                <br />
                <button>Submit</button>
            </form>
        </div>
    )
}
function checkEmail(email) {
    const errors = []
    if (email.length === 0) {
        errors.push("Required")
    }
    if (!email.endsWith("@webdevsimplified.com")) {
        errors.push("Must end with @webdevsimplified.com")
    }
    return errors
}
function checkPassword(password) {
    const errors = []
    if (password.length < 10) {
        errors.push("Must be at least 10 characters")
    }
    if (!password.match(/[a-z]/)) {
        errors.push("Must include at least 1 lowercase letter")
    }
    if (!password.match(/[A-Z]/)) {
        errors.push("Must include at least 1 uppercase letter")
    }
    if (!password.match(/[0-9]/)) {
        errors.push("Must include at least 1 number")
    }
    return errors
}
export default Tutorial60