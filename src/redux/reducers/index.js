import {combineReducers} from "redux"
import userReducer from './user';
import layoutReducer from './layout';


export default combineReducers({
    userState: userReducer,
    layoutState: layoutReducer
})



