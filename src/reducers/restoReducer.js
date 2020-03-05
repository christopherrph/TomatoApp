import {
    FILL_LIST_RESTO
} from '../actions/types'

const INITIAL_STATE = {
    listResto:[]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case FILL_LIST_RESTO :
            return {listResto: action.payload}
        default :
            return state
    }
}