import React, { useState } from 'react'
//Learned how to render list using map in react
const Tutorial36 = () => {
    const [items, setItems] = useState([
        {
            name: "Item1",
            id: crypto.randomUUID()
        },
        {
            name: "Item2",
            id: crypto.randomUUID()
        }
    ])
    const addItems = () => {
        setItems((currentItems) => {
            return [{ name: "Item", id: crypto.randomUUID() }, ...currentItems]
        })
    }
    return (
        <div>
            <button onClick={addItems}>Add Item</button>
            <br></br>
            {items.map((item) => {
                return (<div key={item.id}>
                    <h5>{item.name} <input placeholder='..' /></h5>
                </div>)
            })}
        </div>
    )
}
export default Tutorial36