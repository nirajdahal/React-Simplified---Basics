import React, { useRef } from 'react'
// Learned how to use useRef
const Tutorial45 = () => {
    const emailRef = useRef("")
    const passwordRef = useRef("")
    const handleSubmit = () => {
        console.log("Email:", emailRef.current.value)
        console.log("Password:", passwordRef.current.value)
    }
    return (
        <>
            <input type="text" ref={emailRef} placeholder='Enter your email' />
            <input type="password" ref={passwordRef} placeholder='Enter your password' />
            <button onClick={handleSubmit}>Login</button>
        </>
    )
}
export default Tutorial45