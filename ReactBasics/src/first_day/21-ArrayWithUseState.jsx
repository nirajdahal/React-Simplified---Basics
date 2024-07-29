import React, { useState } from 'react';
const originalList = ["A", "B", "C"];
const Tutorial21 = () => {
    // Learned how to manipulated array using useState
    const [list, setList] = useState(["A", "B", "C"])
    const [inputValue, setInputValue] = useState('')
    const removeFirstElement = () => {
        setList((currentList) => {
            return currentList.slice(1)
        })
    }
    const removeAFromList = (value) => {
        setList((currentList) => {
            return [...currentList].filter(item => item != value)
        })
    }
    const addElementToStart = (value) => {
        setList((currentList) => [value, ...currentList])
    }
    const addElementToEnd = (value) => {
        setList((currentList) => {
            const val = [...currentList]
            val.push(value)
            return val
        })
    }
    const clearList = () => {
        setList([])
    }
    const removeElementsToH = (value) => {
        setList((currentList) => currentList.map(item => item === value ? 'H' : item))
    }
    const addNewElement = () => {
        setList((currentList) => [inputValue, ...currentList]
        )
    }
    const resetToOriginal = () => {
        setList(originalList)
    }
    const addElementByIndex = (index, value) => {
        setList((currentList) => {
            return [...currentList.slice(0, index), value, ...currentList.slice(index, currentList.length + 1)]
        })
    }
    return (
        <>
            <h3> Value :<span style={{ color: 'red' }}>{JSON.stringify(list)}</span> </h3>
            <label htmlFor='addNewElement'>Enter a Letter</label>
            <input id="addNewElement" placeholder='X' maxLength={1} onChange={(e) => setInputValue(e.target.value)} />
            <button onClick={addNewElement}>Add Element</button>
            <br />
            <br />
            <button onClick={removeFirstElement}>Remove First Element</button>
            <br />
            <button onClick={() => removeAFromList("A")}>Remove Specific Element</button>
            <br />
            <button onClick={() => addElementToStart("A")}>Add Element To Start</button>
            <br />
            <button onClick={() => addElementToEnd("B")}>Add Element To End</button>
            <br />
            <button onClick={() => clearList()}>ClearList</button>
            <br />
            <button onClick={() => removeElementsToH("A")}>Replace Elements('A') to 'H'</button>
            <br />
            <button onClick={() => addElementByIndex(2, "N")}>Add Element to 2</button>
            <br />
            <button style={{ color: 'red' }} onClick={() => resetToOriginal()}>Reset</button>
        </>
    )
}
export default Tutorial21