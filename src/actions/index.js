import streams from "./../apis/streams";
import * as ACTIONS from "./types";
export const signIn = () => {
    return {
        type: ACTIONS.SIGN_IN
    }
}
export const signOut = () => {
    return {
        type: ACTIONS.SIGN_OUT
    }
}

export const createStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.post('/streams', formValues);
        dispatch({ type: ACTIONS.CREATE_STREAM, payload: response.data })
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.post(`/stream?id:${id}`,);
        dispatch({ type: ACTIONS.GET_STREAM, payload: response.data })
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: ACTIONS.GET_STREAMS, payload: response.data })
    }
}

export const editStream = (formValues) => {
    return async (dispatch) => {
        const response = await streams.put(`/stream`, formValues);
        dispatch({ type: ACTIONS.EDIT_STREAM, payload: response.data })
    }
}
export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/stream?id:${id}`);
        dispatch({ type: ACTIONS.DELETE_STREAM, payload: id })
    }
}