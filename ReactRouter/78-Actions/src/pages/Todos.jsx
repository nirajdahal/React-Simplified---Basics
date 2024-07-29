import { useEffect, useRef } from "react"
import { Form, Link, useLoaderData, useNavigation } from "react-router-dom"
import { TodoItem } from "../components/TodoItem"
import '../styles.css'
function TodoList() {
    const { todos, searchParams: { query } } = useLoaderData()
    const { state } = useNavigation()
    const querySearchRef = useRef()
    useEffect(() => {
        querySearchRef.current.value = query
    }, [query])
    return (
        <>
            <div className="container" style={{ display: 'flex' }}>
                <div>
                    <h1 className="page-title">Todos</h1>
                </div>
                <div className="title-btns">
                    <Link to='/new' className="btn">New</Link>
                </div>
            </div>
            <Form className="form">
                <div className="container">
                    <input type='search' name='query' id='query' placeholder="Search-Todo" ref={querySearchRef} />
                    <button >Search</button>
                </div>
            </Form>
            <div>
            </div>
            {state === 'loading' ? <h1>Loading</h1> :
                <ul>
                    {todos.map(todo => (
                        <TodoItem key={todo.id} {...todo} />
                    ))}
                </ul>
            }
        </>
    )
}
export default TodoList