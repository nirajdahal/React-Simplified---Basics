import React, { useEffect, useState } from 'react'
//Learned about useEffect hook: mounting, unmounting and updating
const Tutorial28 = () => {
    const [toogle, setToggle] = useState(true)
    const toggleShowHide = () => {
        setToggle(!toogle)
    }
    return (
        <>
            <button onClick={toggleShowHide}>Show/Hide</button>
            {toogle && <MyCompnent></MyCompnent>
            }        </>
    )
}
const MyCompnent = () => {
    const [name, setName] = useState("Niraj")
    const [age, setAge] = useState(26)
    useEffect(() => {
        console.log(age)
    },)
    useEffect(() => {
        console.log("Hi")
        return () => {
            console.log("bye")
        }
    }, [])
    useEffect(() => {
        console.log("Hi! I am ", { name }, "and my age is", { age })
    }, [name, age])
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            console.log(`Hi I am ${name}`)
        }, 1000)
        return () => {
            clearTimeout(timeoutId)
        }
    }, [name])
    return (
        <>
            <div>
                <input value={name} type="text" onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
                <br />
                <br />
                <input value={age} type="number" onChange={(e) => setAge(e.target.value)} placeholder='Enter your age' />
                <h3>Hi! I am , {name}, and my age is, {age} </h3>
            </div>
        </>
    )
}
export default Tutorial28