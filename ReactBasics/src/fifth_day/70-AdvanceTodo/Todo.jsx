import React, { useContext } from 'react'
import './Todo.css'
import { TodoContext } from './TodoContext'
const Todo = ({ id, title, isCompleted }) => {
    const { deleteTodo, editTodo } = useContext(TodoContext)
    return (
        <div>
            <input checked={isCompleted} type='checkbox' onChange={() => editTodo(id, { isCompleted: !isCompleted })} />
            <span style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{title}</span>
            <button> Edit</button>
            <button onClick={() => { deleteTodo(id) }}>Delete</button>
        </div>
    )
}
export default Todo