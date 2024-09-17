import React, { useEffect } from 'react'
import { useTodoContext } from '../context/TodoContext'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  CircularProgress,
  Alert,
} from '@mui/material'
import Pagination from '../components/Pagination'
import { SET_CURRENT_PAGE } from '../reducerType/reducerType'

const TodoTable: React.FC = () => {
  const { state, dispatch, fetchTodos } = useTodoContext()
  const { todos, loading, error, currentPage, totalPages, countPage } = state

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      dispatch({ type: SET_CURRENT_PAGE, payload: newPage })
    }
  }

  useEffect(() => {
    fetchTodos(currentPage)
  }, [currentPage, countPage])

  if (loading) {
    return <CircularProgress />
  }

  if (error) {
    return <Alert severity='error'>{error}</Alert>
  }

  return (
    <Paper>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Title</TableCell>
              <TableCell align='center'>Completed</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {todos.map((todo) => (
              <TableRow key={todo.id}>
                <TableCell>{todo.id}</TableCell>
                <TableCell>{todo.title}</TableCell>
                <TableCell align='center'>
                  {todo.completed ? 'done' : ''}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </Paper>
  )
}

export default TodoTable
