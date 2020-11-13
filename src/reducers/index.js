import { combineReducers } from 'redux'
import todoReducer from 'features/todos/todo-slice'
import visibilityFilterReducer from 'features/filters/filter-slice'

export default combineReducers({
  todos: todoReducer,
  visibilityFilter: visibilityFilterReducer
})
