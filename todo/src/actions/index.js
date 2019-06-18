
export const ADD_TODO = "ADD_TODO"

export const addTodo = todo => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const TOGGLE_CLICK = "TOGGLE_CLICK"

export const toggleClick = index => {
    return {
        type: TOGGLE_CLICK,
        payload: index
    }
}