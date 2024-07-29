import React from 'react'
import { NavLink } from 'react-router-dom'
import './main.css'
const TeamNav = () => {
    return (
        <nav>
            <ul>
                <li>
                    {/* Relative route */}
                    <NavLink to="niraj">Team Niraj</NavLink>
                    {/*
                    Link and NavLink are same except if we use navLink 
                    the link we are currently in is set to active and the colour is changed whenever we change the link
                    <Link to="niraj">Team Niraj</Link> 
                    */}
                </li>
                <li>
                    {/* Absolute route */}
                    <NavLink to="/team/dahal">Team Dahal</NavLink>
                </li>
                <li>
                    {/* navigating one level up from the current route. */}
                    <NavLink to="..">TakeMeOneLevelUp(..route)</NavLink>
                </li>
                <li>
                    {/*  */}
                    <NavLink to=".." relative='path'>TakeMeOneLevelUp (..path)</NavLink>
                </li>
            </ul>
        </nav>
    )
}
export default TeamNav