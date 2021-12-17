import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import category from '../store2/category'

let reducers = combineReducers({category});
const store = ()=>{
    return createStore(reducers,composeWithDevTools());
}
export default store();
















// import {createStore, combineReducers} from 'redux';
// import { composeWithDevTools} from 'redux-devtools-extension';
// import reducer from './votes';

// let reducers = combineReducers({counter: reducer});
// const store = ()=>{
//     return createStore(reducers,composeWithDevTools());

// }
// export default store();