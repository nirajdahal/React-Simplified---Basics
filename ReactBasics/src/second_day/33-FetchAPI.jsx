import React, { useEffect, useState } from 'react';
//Learned how to fetch api in react using js
const Tutorial33 = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null); // Initialize error as null
    useEffect(() => {
        const controller = new AbortController(); // Move this inside useEffect
        fetch("https://jsonplaceholder.typicode.com/users", {
            signal: controller.signal
        })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .then(data => {
                console.log(data);
                setUsers(data);
            })
            .catch((e) => {
                if (e?.name === 'AbortError') return; // Ignore abort errors
                setError(e);
                console.log(e);
            })
            .finally(() => {
                console.log("Loading removed");
                setLoading(false);
            });
        return () => {
            controller.abort();
        };
    }, []);
    let jsx;
    if (loading) {
        jsx = <h2>Loading....</h2>;
    } else if (error !== null) {
        jsx = <h2 style={{ color: 'red' }}>Error: {error.status || 'An error occurred'}</h2>;
    } else {
        jsx = <h2>{JSON.stringify(users, null, 2)}</h2>; // Pretty-print JSON
    }
    return (
        <div>
            <h1>Users</h1>
            {jsx}
        </div>
    );
};
export default Tutorial33;
