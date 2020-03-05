import {
    INIT_RESTO_DETAIL
} from '../actions/types'

const INITIAL_STATE = {
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case INIT_RESTO_DETAIL :
            return {...INITIAL_STATE, ...action.payload}
        default :
            return state
    }
}