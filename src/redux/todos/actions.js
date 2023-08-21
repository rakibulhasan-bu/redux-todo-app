import { ADDTODO } from './actionType'
export const addTodo = (todoText) => {
    return {
        type: ADDTODO,
        payload: todoText
    }
}