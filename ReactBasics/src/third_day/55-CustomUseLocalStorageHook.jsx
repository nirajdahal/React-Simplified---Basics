import React, { useEffect, useState } from 'react'
const Tutorial55 = () => {
    const [firstName, setFirstName] = useLocalStorage("First_Name", "")
    // const [lastName, setLastName] = useState("")
    // const [hobbies, sethobbies] = useState("")
    return (
        <>
            <input placeholder='firstName' type='text' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            {/* <input placeholder='firstName' type='text' value={lastName} onChange={(e) => setLastName(e.target.value)} /> */}
            {/* <button>Add Hobby</button> */}
        </>
    )
}
const useLocalStorage = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        const localValue = localStorage.getItem(key)
        if (localValue == null) {
            return initialValue
        }
        else {
            return JSON.parse(localValue)
        }
    })
    useEffect(() => {
        if (value === undefined) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, JSON.stringify(value))
        }
    }, [value])
    return [value, setValue]
}
export default Tutorial55