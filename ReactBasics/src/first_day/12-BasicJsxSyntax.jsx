import './App.css';
const Tutorial12 = () => {
    // Learned basic syntax of jsx
    return (
        <>
            <h5 style={{ backgroundColor: 'red' }}>Testing Colors</h5>
            <label htmlFor='number'>Enter Number</label>
            <input id="number" type='number' defaultValue={3} />
            <h1>{
                // You can write javascript code inside this curly brackets
            }</h1>
        </>
    )
}
export default Tutorial12