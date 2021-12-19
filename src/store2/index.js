import {createStore, combineReducers} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import category from './category';
import cartReducer from './cart-reducer';

let reducers = combineReducers({category,cartReducer});
const store2 = ()=>{
    return createStore(reducers,composeWithDevTools());
}
export default store2();