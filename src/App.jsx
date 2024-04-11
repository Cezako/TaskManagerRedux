import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index.js'
import TaskList from './components/TaskList.jsx'
import AddTaskForm from './components/AddTaskForm.jsx'


function App() {
  
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Task Manager</h1>
        <AddTaskForm />
        <TaskList />
      </div>
    </Provider>
  )
}


export default App
