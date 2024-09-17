import {
  FETCH_TODOS_LOADING,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_ERROR,
  SET_CURRENT_PAGE,
} from '../reducerType/reducerType'

export interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

export interface TodoState {
  todos: Todo[]
  loading: boolean
  error: string | null
  currentPage: number
  countPage: number
  totalPages: number
}

export type TodoAction =
  | { type: typeof FETCH_TODOS_LOADING }
  | {
      type: typeof FETCH_TODOS_SUCCESS
      payload: { todos: Todo[]; totalPages: number }
    }
  | { type: typeof FETCH_TODOS_ERROR; payload: string }
  | { type: typeof SET_CURRENT_PAGE; payload: number }

export interface PaginationInterface {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}
