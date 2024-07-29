import React, { useReducer } from 'react';
function reducer(count, action) {
    switch (action.type) {
        case 'ADD':
            return count + 1
        case 'MINUS':
            return count - 1
        case 'CHANGE_COUNT':
            return count * action.payload.value
        case 'RESET':
            return 0
        default:
            return count
    }
}
const Tutorial63 = ({ initialCount = 0 }) => {
    const [count, dispatch] = useReducer(reducer, initialCount)
    return (
        <>
            <button onClick={() => dispatch({ type: "MINUS" })}>Minus(-)</button>
            {count}
            <button onClick={() => dispatch({ type: "ADD" })}>Plus(+)</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => { dispatch({ type: "CHANGE_COUNT", payload: { value: 5 } }) }}>Change By 5</button>
        </>
    )
}
export default Tutorial63