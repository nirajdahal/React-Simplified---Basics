import React, { useState } from 'react'
const Tutorial20 = () => {
    // Learned how to use input change event, controlled and uncontrolled input
    const [name, setName] = useState("Niraj")
    const logInputValue = () => {
        console.log(name)
    }
    return (
        <div>
            <input value={name} onChange={(e) => setName(e.target.value)}></input>
            <button onClick={logInputValue}>LogValue</button>
        </div>
    )
}
export default Tutorial20