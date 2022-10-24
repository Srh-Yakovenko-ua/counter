import {combineReducers, legacy_createStore} from 'redux';
import {counterRedux} from './counterRedux';

const rootReducer = combineReducers({
    counter: counterRedux
})


export const store = legacy_createStore(rootReducer)

export type RootStateType = ReturnType<typeof rootReducer>