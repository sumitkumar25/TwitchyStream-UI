import * as ACTIONS from './../actions/types'
import { omit, mapKeys } from 'lodash'
const streamReducer = (state = {}, action) => {
    switch (action.type) {
        case ACTIONS.EDIT_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case ACTIONS.GET_STREAM:
            return { ...state, [action.payload.id]: action.payload }

        case ACTIONS.GET_STREAMS:
            return { ...state, [action.payload.id]: action.payload }


        case ACTIONS.CREATE_STREAM:

            return { ...state, ...mapKeys(action.payload, 'id') }

        case ACTIONS.DELETE_STREAM:
            return omit(state, action.payload);

        default:
            return state
    }
}
export default streamReducer;