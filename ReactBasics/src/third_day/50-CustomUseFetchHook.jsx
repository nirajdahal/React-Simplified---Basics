import React, { useEffect, useState } from 'react'
//Created custom fetch hook
const URLS = {
    USERS: "https://jsonplaceholder.typicode.com/users",
    POSTS: "https://jsonplaceholder.typicode.com/posts",
    COMMENTS: "https://jsonplaceholder.typicode.com/comments",
}
// const OPTIONS = {
//   method: "POST",
//   body: JSON.stringify({ name: "Kyle" }),
//   headers: {
//     "Content-type": "application/json",
//   },
// }
const Tutorial50 = () => {
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
function useFetch(url, options = {}) {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    useEffect(() => {
        const controller = new AbortController();
        setIsLoading(true)
        fetch(url, { signal: controller.signal }, { ...options })
            .then(res => {
                if (res.status === 200) {
                    return res.json();
                } else {
                    return Promise.reject(res);
                }
            })
            .then(data => {
                setData(data)
            }).catch(error => {
                console.log(error)
                if (error?.name === 'AbortError') return
                setIsError(true)
            }).finally(() => {
                if (controller.signal.aborted) return
                setIsLoading(false)
            })
        return () => {
            controller.abort();
        }
    }, [url])
    return { data, isLoading, isError }
}
export default Tutorial50