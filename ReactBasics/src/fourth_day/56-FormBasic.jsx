import React, { useState } from 'react'
//How to use form in react 
const Tutorial56 = () => {
    const [todo, setTodo] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hi i have been submitted using a form")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='Write Todo' value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button type='submit'>Add Todo</button>
        </form>
    )
}
export default Tutorial56