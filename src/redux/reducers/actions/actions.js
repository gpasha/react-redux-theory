import { ADD, ADD2, ADD_ASYNC_NUMBER, ADD_NUMBER, SUB, SUB2 } from "./actionsType";

export function add() {
    return {
        type: ADD,
    }
}

export function sub() {
    return {
        type: SUB
    }
}

export function addNumber(number) {
    return {
        type: ADD_NUMBER,
        payload:number
    }
}

export function add2() {
    return {
        type: ADD2
    }
}

export function sub2() {
    return {
        type: SUB2
    }
}

export function addAsyncNumber(number) {
    return dispatch => {
        setTimeout(()=> {
            dispatch({
                type: ADD_ASYNC_NUMBER,
                payload: number
            })
        }, 3000)
    }
}