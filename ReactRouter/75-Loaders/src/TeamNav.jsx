import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './main.css';
const TeamNav = () => {
    const teamMembersList = useLoaderData()
    return (
        <nav>
            <ul>
                {teamMembersList.map((team) => {
                    return <li key={team.id}>
                        <Link to={team.id.toString()} >{team.name}</Link>
                    </li>
                })}
                {/* <li>
                    <Link to='new'>New Team</Link>
                </li> */}
            </ul>
        </nav>
    )
}
export default TeamNav