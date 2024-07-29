import React from 'react';
import { Link } from 'react-router-dom';
import './main.css';
import { teamMembers } from './teamMembers';
const TeamNav = () => {
    const teamMembersList = teamMembers;
    return (
        <nav>
            <ul>
                {teamMembersList.map((team) => {
                    return <li key={team.id}>
                        <Link to={team.id} >{team.name}</Link>
                    </li>
                })}
                <li>
                    <Link to='new'>New Team</Link>
                </li>
            </ul>
        </nav>
    )
}
export default TeamNav