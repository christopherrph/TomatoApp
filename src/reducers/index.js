import { combineReducers } from 'redux';
import userReducer from './userReducer';
import restoReducer from './restoReducer';
import restodetailReducer from './restodetailReducer';
export default combineReducers({
    user: userReducer,
    resto: restoReducer,
    restodetail: restodetailReducer
})