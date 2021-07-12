import { ADD, ADD_ASYNC_NUMBER, ADD_NUMBER, SUB, SUB2 } from "./actions/actionsType"

const initialState = {
    counter: 0
}

export default function counter1(state = initialState, action) {
    switch (action.type) {
        case ADD:
            return {
                counter: state.counter + 1
            }
        case SUB:
            return {
                counter: state.counter - 1
            }      
        case ADD_NUMBER:
            return {
                counter: state.counter + action.payload
            }   
        case ADD_ASYNC_NUMBER:
                return {
                    counter: state.counter + action.payload
                }
        default:
            return {...state}
    }
}