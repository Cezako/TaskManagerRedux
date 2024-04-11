// AddTaskForm.js
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../store/Slice/taskSlice.js'


const AddTaskForm = () => {

    const [title, setTitle] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() !== '') {
            dispatch(addTask({
                userId: 1,
                id: Date.now(),
                title,
                completed: false
            }))
            setTitle('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
        <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Titre de la tâche"
        />
        <button type="submit">Add Task</button>
        </form>
    )
}

export default AddTaskForm
