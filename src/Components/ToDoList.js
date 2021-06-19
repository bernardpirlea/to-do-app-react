import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ( {toDoList} ) => {
    return (
        <ul className='to-do-list'>
            {
                toDoList.map( item => <ToDoItem item={item} /> )
            }
        </ul>
    )
}

export default ToDoList
