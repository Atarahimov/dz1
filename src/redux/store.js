import {combineReducers, createStore} from 'redux';
import {counterReducer, textReducer} from "./reducer.js";


const rootReducer = combineReducers({
    text: textReducer,
    counter:counterReducer,
});
const store = createStore(rootReducer)
export default store;
