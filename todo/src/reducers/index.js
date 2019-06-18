import { ADD_TODO } from '../actions';

const initialState = {
  todos: [

    {value: "Wash dishes", completed: false},
    {value: "Take out trash", completed: false},
    {value: "Do projects", completed: false}
  ]
}

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    const todos = { value: action.payload, completed: false}
      return {
        ...state,
        todos: [...state.todos, todos]
      }
    default:
      return state;
  }
};
