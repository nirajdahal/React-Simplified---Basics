import React, { useContext } from 'react'
import Todo from './Todo'
import './Todo.css'
import { TodoContext } from './TodoContext'
const Todos = () => {
    const {
        todos
    } = useContext(TodoContext)
    console.log("todos", todos)
    return (
        <>
            {todos.map((todo) => <Todo key={todo.id} {...todo} />)}
        </>
    )
}
export default Todos