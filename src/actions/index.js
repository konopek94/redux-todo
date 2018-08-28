export const AddTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text,
        completed: false
    }
}

export const setVisiblityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}