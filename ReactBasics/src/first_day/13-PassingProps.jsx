import React from 'react';
// In this tutorial learned a way for passing props to child
const TodoListItem = ({ isComplete, children }) => {
    return (
        <>
            <label>
                <input type="checkbox" defaultChecked={isComplete} />
                {children}
            </label>
        </>
    )
}
const Tutorial13 = () => {
    const name = "Niraj";
    return (
        <>
            <ul>
                <TodoListItem isComplete={true}>
                    {name}
                </TodoListItem>
            </ul>
        </>
    )
}
export default Tutorial13