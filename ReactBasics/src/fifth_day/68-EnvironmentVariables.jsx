import React from 'react';
//Leearned how to import env files
const env_Files = import.meta.env;
const Tutorial68 = () => {
    return (
        <div>{env_Files.VITE_URL}</div>
    )
}
export default Tutorial68