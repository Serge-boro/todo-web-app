import React from 'react'
import TodoTable from './components/TodoTable'
import { Container } from '@mui/material'
import { TodoProvider } from './context/TodoContext'
import './App.css'

const App: React.FC = () => {
  return (
    <TodoProvider>
      <Container maxWidth='md' sx={{ marginTop: 4 }}>
        <div className='todo-title'>Todo List Application</div>
        <TodoTable />
      </Container>
    </TodoProvider>
  )
}

export default App
