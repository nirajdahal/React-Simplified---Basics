import React, { useState } from 'react'
// Simple Todo Application
const Todo = ({ id, name, isCompleted, completedTodo, deleteTodo }) => {
    return <>
        <div style={{ display: 'flex' }}>
            <input type='checkbox' checked={isCompleted} onChange={() => completedTodo(id)} />
            <p style={{ textDecoration: isCompleted ? 'line-through' : 'none' }}>{name} &nbsp;</p>
            <button onClick={() => deleteTodo(id)}>Delete</button>
        </div>
    </>
}
const Tutorial43 = () => {
    const [newTodo, setNewTodo] = useState("")
    const [todos, setTodos] = useState([])
    const addTodo = () => {
        setTodos((currentTodo) => {
            return [{ name: newTodo, id: crypto.randomUUID(), isCompleted: false }, ...currentTodo]
        })
    }
    const completedTodo = (id) => {
        console.log(id)
        console.log(todos)
        setTodos((currentTodos) => {
            return currentTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, isCompleted: !todo.isCompleted }
                }
                return todo
            })
        })
    }
    const deleteTodo = (id) => {
        setTodos((currentTodo) => {
            return [...currentTodo].filter(todo => todo.id !== id)
        })
    }
    return (
        <>
            <div>
                <input value={newTodo} placeholder='Add Todo' onChange={(e) => setNewTodo(e.target.value)} />
                <br />
                <button disabled={newTodo.length < 2} onClick={addTodo} style={{ backgroundColor: 'green' }}>Add Todo</button>
                <br />
                <br />
                {todos.length === 0 && <h5>No Todos Added Yet</h5>}
                {todos.length > 0 && <div>
                    {
                        todos.map((todo) => (
                            <Todo key={todo.id} {...todo} completedTodo={completedTodo} deleteTodo={deleteTodo} />
                        ))
                    }
                </div>
                }
            </div>
        </>
    )
}
export default Tutorial43