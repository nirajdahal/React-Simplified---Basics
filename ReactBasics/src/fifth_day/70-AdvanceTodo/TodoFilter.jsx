import React, { useContext } from 'react'
import './Todo.css'
import { TodoContext } from './TodoContext'
const TodoFilter = () => {
    const { filterTitle, setFilterTitle, hideCompleted, setHideCompleted } = useContext(TodoContext)
    return (
        <div>
            <label htmlFor='filter-todo'>Search: </label>
            <input value={filterTitle} onChange={(e) => setFilterTitle(e.target.value)} id="filter-todo" placeholder='Search for Todo' />
            <input checked={hideCompleted} onChange={(e) => setHideCompleted(e.target.checked)
            } id="completed-todo" type='checkbox' />
            <label htmlFor='completed-todo' >Hide Completed</label>
        </div>
    )
}
export default TodoFilter