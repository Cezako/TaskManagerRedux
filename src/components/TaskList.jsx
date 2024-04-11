import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTask } from '../store/Slice/taskSlice.js'

const TaskList = () => {
    
    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const handleRemoveTask = (taskId) => {
        dispatch(removeTask(taskId))
    }

    return (
        <div>
            <h2>Tasks List</h2>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => handleRemoveTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList