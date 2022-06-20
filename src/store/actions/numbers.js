import { NUM_MAX_CHANGED, NUM_MIN_CHANGED } from "./actionTypes"

export function changeMinimumNumber(newNumber) {
    return {
        type: NUM_MIN_CHANGED,
        payload: newNumber
    }
}

export function changeMaximumNumber(newNumber) {
    return {
        type: NUM_MAX_CHANGED,
        payload: newNumber
    }
}