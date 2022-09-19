import { combineReducers } from "redux";
import counterReducer from "./counterReducer";

import loggedReducer from "./loggedReducer";

const reducers = combineReducers({
    counterReducer: counterReducer,
    loggedReducer: loggedReducer
})


export default reducers ;