import React, { createContext, useContext, useState } from 'react'
//Learned how to use useContext Hook
const ThemeContext = createContext()
const Tutorial64 = () => {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleTheme = () => {
        setDarkMode((currentValue) => !currentValue)
    }
    return (
        <ThemeContext.Provider value={{ isDarkMode: isDarkMode, toggleTheme: toggleTheme }}>
            <div >
                <Child />
                <p style={
                    {
                        backgroundColor: isDarkMode ? 'black' : 'white',
                        color: isDarkMode ? 'white' : 'black'
                    }
                }>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab sed tenetur esse nesciunt
                    error blanditiis reprehenderit soluta ex eius, assumenda distinctio, mollitia deleniti saepe?
                    Culpa totam sequi vitae rerum?
                </p>
            </div>
        </ThemeContext.Provider>
    )
}
function Child() {
    return (<><GrandChild /></>)
}
function GrandChild() {
    const {
        isDarkMode,
        toggleTheme
    } = useContext(ThemeContext)
    return (<>
        <button
            style={{ backgroundColor: { isDarkMode } ? 'black' : 'white', color: { isDarkMode } ? 'white' : 'black' }}
            onClick={toggleTheme}
        >Toggle
        </button>
    </>)
}
//This is example of prop drilling
/*
const Tutorial64 = () => {
    const [isDarkMode, setDarkMode] = useState(false)
    const toggleTheme = () => {
        setDarkMode((currentValue) => !currentValue)
    }
    return (
        <div >
            <Child isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
            <p style={
                {
                    backgroundColor: isDarkMode ? 'black' : 'white',
                    color: isDarkMode ? 'white' : 'black'
                }
            }>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non ab sed tenetur esse nesciunt
                error blanditiis reprehenderit soluta ex eius, assumenda distinctio, mollitia deleniti saepe?
                Culpa totam sequi vitae rerum?
            </p>
        </div>
    )
}
function Child({ isDarkMode, toggleTheme }) {
    return (<><GrandChild isDarkMode={isDarkMode} toggleTheme={toggleTheme} /></>)
}
function GrandChild({ isDarkMode, toggleTheme }) {
    return (<>
        <button
            style={{ backgroundColor: { isDarkMode } ? 'black' : 'white', color: { isDarkMode } ? 'white' : 'black' }}
            onClick={toggleTheme}
        >Toggle
        </button>
    </>)
}
*/
export default Tutorial64