import { legacy_createStore as createStore, combineReducers } from 'redux'
import numberReducer from './reducers/number'

const reducers = combineReducers({
    numbers: numberReducer
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig