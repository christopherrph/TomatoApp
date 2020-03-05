import {
    INPUT_TEXT,
    USER_LOGOUT,
    USER_LOGIN,
    KEEP_LOGIN
} from '../actions/types'

const INITIAL_STATE = {
    username: '',
    error: '',
    isLogin: false
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case INPUT_TEXT :
            return {...state, username: action.payload.value }
        case USER_LOGIN:
            return {...state, isLogin: true}
        case KEEP_LOGIN:
            return {...state, isLogin: true, username: action.payload}
        case USER_LOGOUT :
            return INITIAL_STATE
        default :
            return state
    }
}