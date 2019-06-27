import { ADD_TODO , TOGGLE_CLICK} from '../actions';

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

    case TOGGLE_CLICK:
        return { 
            ...state,
            todos: state.todos.map((todos, index) => {
                if (action.payload === index) {
                return {
                    ...todos,
                    completed: !todos.completed
                };
                }   else {
                return todos;
                }
            }
            )};
    default:
        return state;
}
};
