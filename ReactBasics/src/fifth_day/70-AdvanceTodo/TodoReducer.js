export const TODO_ACTIONS = {
    ADD: 'ADD',
    DELETE: 'DELETE',
    EDIT: 'EDIT',
    FILTER: 'FILTER'
}
export function todoReducer(initialTodos, action) {
    switch (action.type) {
        case TODO_ACTIONS.ADD:
            return [{ ...action.payload.data }, ...initialTodos]
        case TODO_ACTIONS.EDIT:
            return initialTodos.map((todo) => (todo.id === action.payload.id) ? { ...todo, ...action.payload.data } : todo)
        case TODO_ACTIONS.DELETE:
            return initialTodos.filter((todo) => todo.id !== action.payload.id)
        default:
            return initialTodos
    }
}