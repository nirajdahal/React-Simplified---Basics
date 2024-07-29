import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const About = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const timeOut = setTimeout(() => {
            navigate('/')
            // window.location.href = '/'
        }, 2000);
        return () => {
            clearTimeout(timeOut)
        }
    }, [])
    return (
        <>
            <div>About</div>
        </>
    )
}
export default About