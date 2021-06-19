import React from 'react'
import ToDoList from './ToDoList'
import { useState } from 'react'

const Content = () => {
    const [input, setInput] = useState('')
    const [toDoList, setToDoList] = useState(['First Item', 'Second Item', 'Third Item'])

    const handleChange = (event) => {
        event.preventDefault()
        setInput(event.target.value)
    }

    const handleClick = (event) => {
        event.preventDefault()
        let newToDoList = [...toDoList, input]
        setToDoList(newToDoList)
        setInput('')
    }

    return (
        <main className='main'>
            <h2>Add new item:</h2>
            <form>
                <input type='text' onChange={handleChange} value={input}/>
                <button onClick={handleClick}>Add</button>
            </form>
            <ToDoList toDoList={toDoList}/>
        </main>
    )
}

export default Content
