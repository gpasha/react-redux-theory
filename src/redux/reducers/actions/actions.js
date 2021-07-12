import { ADD, ADD2, ADD_NUMBER, SUB, SUB2 } from "./actionsType";

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