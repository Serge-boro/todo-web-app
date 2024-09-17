import {
  createContext,
  useReducer,
  useContext,
  Dispatch,
  ReactNode,
} from 'react'
import axios from 'axios'
import { Todo, TodoState, TodoAction } from '../interfaces/interfaces'
import { todoReducer, initialState } from '../context/TodoReducer'
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
} from '../reducerType/reducerType'

interface TodoContextProps {
  state: TodoState
  dispatch: Dispatch<TodoAction>
  fetchTodos: (page: number) => void
}

const url = 'https://jsonplaceholder.typicode.com/todos'

const TodoContext = createContext<TodoContextProps | undefined>(undefined)

export const TodoProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const fetchTodos = async (page: number) => {
    dispatch({ type: FETCH_TODOS_LOADING })
    try {
      // Using addition flag 'params' to limit data for the axios library
      const response = await axios.get<Todo[]>(url, {
        params: {
          _limit: state.countPage,
          _page: page,
        },
      })

      const totalItems = 200 //response.data.length
      const totalPages = Math.ceil(totalItems / state.countPage)

      dispatch({
        type: FETCH_TODOS_SUCCESS,
        payload: {
          todos: response.data,
          totalPages: totalPages,
        },
      })
    } catch (error) {
      dispatch({ type: FETCH_TODOS_ERROR, payload: 'Failed fetching data' })
    }
  }

  return (
    <TodoContext.Provider value={{ state, dispatch, fetchTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

// Using consumer from Context API
export const useTodoContext = () => {
  const context = useContext(TodoContext)
  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider')
  }
  return context
}
