import React, { useState } from 'react';
//Learned how to use custom hooks
const Tutorial49 = () => {
    const [darkMode, setDarkMode] = useToggle(false)
    const inputVal = useInputValue("")
    // const filteredValue = val.filter(item => item.toString().includes(inputVal.toString()))
    return (
        <div style={{ backgroundColor: darkMode ? '#3e3e42' : 'white', color: darkMode ? 'white' : 'black', height: '100vh' }}>
            <label htmlFor='toogle-dark'>Dark Mode</label>
            <input id='toogle-dark' type='checkbox' checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
            <br />
            <input type='text' placeholder='Enter something' {...inputVal} />
        </div>
    )
}
function useToggle(initialValue) {
    const [value, setValue] = useState(initialValue)
    function toggle() {
        setValue((currentVal) => !currentVal)
    }
    return [value, toggle]
}
function useInputValue(initialValue) {
    const [inputValue, setInputValue] = useState(initialValue)
    return { value: inputValue, onChange: (e) => setInputValue(e.target.value) }
}
export default Tutorial49