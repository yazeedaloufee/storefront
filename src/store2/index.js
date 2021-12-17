import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import category from './category'

let reducers = combineReducers({category});
const store2 = ()=>{
    return createStore(reducers,composeWithDevTools());
}
export default store2();