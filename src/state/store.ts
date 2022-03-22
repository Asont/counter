
import {combineReducers, createStore} from "redux";
import {appReducer} from "./app-reducer";

const rootReducer = combineReducers({
    appReducer:appReducer,
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;