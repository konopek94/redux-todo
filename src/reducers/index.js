const todo = (state, action) => {
    switch (action.type) {
        case 'ADD-TODO':
            return [...state, id: action.id, text.action, completed: false]

        case 'TOGGLE_TODO':
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo
                }
                return Object.assign({}, todo, {
                    completed: !todo.completed
                })
            })
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }
}