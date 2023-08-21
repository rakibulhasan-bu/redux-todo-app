import initialState from "./initialState"
import { ADDTODO } from './actionType'
const nextId = (todos) => {
    const maxId = todos.reduce((maxId, todo) => Math.max(maxId, todo.id), -1)
    return maxId + 1
}
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDTODO:
            return [
                ...state,
                {
                    id: () => nextId(state),
                    text: action.payload
                }
            ]

        default:
            break;
    }
}

export default reducer;