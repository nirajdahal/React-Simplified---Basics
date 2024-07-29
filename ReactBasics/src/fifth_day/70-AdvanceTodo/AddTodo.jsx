import React, { useContext, useRef } from 'react'
import './Todo.css'
import { TodoContext } from './TodoContext'
const AddTodo = () => {
    const todoInput = useRef("")
    const { addTodo } = useContext(TodoContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const inputVal = todoInput.current.value
        if (todoInput.current.value.length > 0) {
            addTodo({ title: inputVal })
        }
        todoInput.current.value = ""
    }
    return (
        <form onSubmit={handleSubmit}>
            <h4>New Todo</h4>
            <input ref={todoInput} placeholder='New Todo' />
            <button type="submit" >Add Todo</button>
        </form>
    )
}
export default AddTodo