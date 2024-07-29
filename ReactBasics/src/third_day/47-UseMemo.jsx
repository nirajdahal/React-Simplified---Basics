import React, { useMemo, useState } from 'react';
//Learned how to use useMemo
let val = [];
for (let index = 0; index < 9000000; index++) {
    val.push(index)
}
const Tutorial47 = () => {
    const [inputVal, setInputVal] = useState(0)
    const [filteredVal, setFilterValue] = useState([])
    const [darkMode, setDarkMode] = useState(false)
    const filteredValue = useMemo(() =>
        val.filter(item => item.toString().includes(inputVal.toString())
        ), [inputVal]
    )
    // const filteredValue = val.filter(item => item.toString().includes(inputVal.toString()))
    return (
        <div style={{ backgroundColor: darkMode ? 'yellow' : 'white' }}>
            <label htmlFor='toogle-dark'>Dark Mode</label>
            <input id='toogle-dark' type='checkbox' checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            <br />
            <input type='number' value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
        </div>
    )
}
export default Tutorial47