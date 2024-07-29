import { useState } from "react"
const Tutorial18 = () => {
    // Learned about use State hook
    const [count, setCount] = useState(0)
    const handleIncrease = () => {
        setCount(count + 1)
    }
    const handleDecrease = () => {
        setCount(count - 1)
    }
    return (
        <>
            <h3>Count:{count}</h3>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
        </>
    )
}
export default Tutorial18