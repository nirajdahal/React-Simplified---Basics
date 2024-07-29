import React from 'react'
import { useLoaderData, useOutletContext } from 'react-router-dom'
const TeamMember = ({ name }) => {
    const teamMember = useLoaderData()
    console.log(teamMember)
    const contextValue = useOutletContext()
    return (
        <div>  Welcome {teamMember.name}!<br />
            {contextValue} </div>
    )
}
export default TeamMember