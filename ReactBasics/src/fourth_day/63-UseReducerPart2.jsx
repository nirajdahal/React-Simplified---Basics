import React, { useEffect, useReducer, useState } from 'react'
//Used use reducer hook to simplify code
const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMENTS: "https://jsonplaceholder.typicode.com/commentsg",
}
// const OPTIONS = {
//   method: "POST",
//   body: JSON.stringify({ name: "Kyle" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }
const Tutorial63_Part2 = () => {
    const [selectedURL, setSelectedURL] = useState(URLS.USERS)
    const { data, isLoading, isError } = useFetch(selectedURL)
    return (
        <>
            <input id="users-input" type='radio' checked={selectedURL === URLS.USERS} onChange={() => setSelectedURL(URLS.USERS)} />
            <label htmlFor='users-input' >Users &nbsp;&nbsp;</label>
            <input id="posts-input" type='radio' checked={selectedURL === URLS.POSTS} onChange={() => setSelectedURL(URLS.POSTS)} />
            <label htmlFor='posts-input'>Post &nbsp;&nbsp;</label>
            <input id="comments-input" type='radio' checked={selectedURL === URLS.COMMENTS} onChange={() => setSelectedURL(URLS.COMMENTS)} />
            <label htmlFor='comments-input'>Comments &nbsp;&nbsp;</label>
            <div>
                <h2>Data:</h2>
                {isLoading ? (
                    <h1>Loading...</h1>
                ) : isError ? (
                    <h1>Error</h1>
                ) : (
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                )}
            </div>
        </>
    )
}
const ACTIONS = {
    FETCH_START: "FETCH_START",
    FETCH_SUCCESS: "FETCH_SUCCESS",
    FETCH_ERROR: "FETCH_END"
}
const reducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.FETCH_START:
            return { isError: false, isLoading: true }
        case ACTIONS.FETCH_SUCCESS:
            return { ...state, data: payload.value, isLoading: false }
        case ACTIONS.FETCH_ERROR:
            return { isError: true, isLoading: false }
        default:
            return state
    }
}
function useFetch(url, options = {}) {
    const [state, dispatch] = useReducer(reducer, { isLoading: false, isError: false })
    useEffect(() => {
        const controller = new AbortController();
        dispatch({ type: ACTIONS.FETCH_START })
        fetch(url, { signal: controller.signal }, { ...options })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .then(data => {
                dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { value: data } })
            }).catch(error => {
                console.log(error)
                if (error?.name === 'AbortError') return
                dispatch({ type: ACTIONS.FETCH_ERROR })
            }).finally(() => {
                if (controller.signal.aborted) return
            })
        return () => {
            controller.abort();
        }
    }, [url])
    return { ...state }
}
export default Tutorial63_Part2