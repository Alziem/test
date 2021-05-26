import { combineReducers } from 'redux'
import reducerInitial from './initial/initial';

export default combineReducers({
    authorization:reducerInitial
});