import { TodoState, TodoAction } from '../interfaces/interfaces'
import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  SET_CURRENT_PAGE,
} from '../reducerType/reducerType'

export const initialState: TodoState = {
  todos: [],
  loading: false,
  error: null,
  currentPage: 1,
  countPage: 20,
  totalPages: 1,
}

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case FETCH_TODOS_LOADING:
      return { ...state, loading: true, error: null }
    case FETCH_TODOS_SUCCESS:
      return {
        ...state,
        loading: false,
        todos: action.payload.todos,
        totalPages: action.payload.totalPages,
      }
    case FETCH_TODOS_ERROR:
      return { ...state, loading: false, error: action.payload }
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.payload }
    default:
      return state
  }
}
