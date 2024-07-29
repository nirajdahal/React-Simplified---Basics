import React, { useEffect, useMemo, useReducer, useState } from 'react'
import AddTodo from './AddTodo'
import './Todo.css'
import { TodoContext } from './TodoContext'
import TodoFilter from './TodoFilter'
import { TODO_ACTIONS, todoReducer } from './TodoReducer'
import Todos from './Todos'
const LOCAL_STORAGE_KEY = "Todos"
//Create Context
const AdvanceTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [
        { id: crypto.randomUUID(), title: 'Todo1', isCompleted: false },
        { id: crypto.randomUUID(), title: 'Todo2', isCompleted: true }
    ], (initialValue) => {
        const value = localStorage.getItem(LOCAL_STORAGE_KEY)
        if (value == null) return initialValue
        return JSON.parse(value)
    })
    const [filterTitle, setFilterTitle] = useState("")
    const [hideCompleted, setHideCompleted] = useState(false)
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
    }, [todos])
    const filteredTodos = useMemo(() => {
        return todos.filter((todo) => {
            if (hideCompleted && todo.isCompleted == true) return false
            return todo.title.includes(filterTitle)
        })
    },
        [filterTitle, todos, hideCompleted]
    )
    const addTodo = ({ title }) => {
        dispatch(({ type: TODO_ACTIONS.ADD, payload: { data: { title: title, id: crypto.randomUUID() } } }))
    }
    const deleteTodo = (id) => {
        dispatch({ type: TODO_ACTIONS.DELETE, payload: { id } })
    }
    const editTodo = (id, data) => {
        dispatch({ type: TODO_ACTIONS.EDIT, payload: { id, data } })
    }
    return (
        <TodoContext.Provider value={{ todos: filteredTodos, addTodo, deleteTodo, editTodo, filterTitle, setFilterTitle, hideCompleted, setHideCompleted }}>
            <>
                <div>
                    <TodoFilter />
                </div>
                <hr />
                <div>
                    <Todos />
                </div>
                <div>
                    <AddTodo />
                </div>
            </>
        </TodoContext.Provider>
    )
}
export default AdvanceTodo