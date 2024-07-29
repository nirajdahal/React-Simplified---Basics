import React from 'react'
import { useOutletContext } from 'react-router-dom'
const TeamMember = ({ name }) => {
    const contextValue = useOutletContext()
    return (
        <div>  Welcome {name}!<br />
            {contextValue} </div>
    )
}
export default TeamMember