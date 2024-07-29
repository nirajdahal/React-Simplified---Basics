import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { teamMembers } from '../teamMembers'
const TeamMember = ({ name }) => {
    const { memberId } = useParams()
    const teamMember = teamMembers.find(team => team.id === memberId)
    console.log(memberId)
    const contextValue = useOutletContext()
    return (
        <div>  Welcome {teamMember.name}!<br />
            {contextValue} </div>
    )
}
export default TeamMember