import React, { useState } from 'react'
//Learned when to use <> </> vs <React.Fragments></React.Fragments>
//Use <React.Fragments></React.Fragments> when you have to pass unique key inside fragments
//for example <React.Fragments key={item.id}></React.Fragments> because in <></> we cannot pass id
const Tutorial37 = () => {
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
        <>
            <button onClick={addItems}>Add Item</button>
            <br></br>
            {items.map((item) => {
                return (
                    <React.Fragment key={item.id}>
                        <h5>{item.name} </h5>
                    </React.Fragment>
                )
            })}
        </>
    )
}
export default Tutorial37