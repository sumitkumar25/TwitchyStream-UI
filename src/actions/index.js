import history from "../history";
import streams from "./../apis/streams";
import * as ACTIONS from "./types";
export const signIn = (userId) => {
    return {
        type: ACTIONS.SIGN_IN,
        payload: userId
    }
}
export const signOut = () => {
    return {
        type: ACTIONS.SIGN_OUT
    }
}

export const createStream = (formValues) => {
    return async (dispatch, getState) => {
        const { userId } = getState().auth;
        const response = await streams.post('/streams', { ...formValues, userId });
        dispatch({ type: ACTIONS.CREATE_STREAM, payload: response.data })
        history.push('/');
    }
}

export const fetchStream = (id) => {
    return async (dispatch) => {
        const response = await streams.get(`/streams/${id}`,);
        dispatch({ type: ACTIONS.GET_STREAM, payload: response.data })
    }
}

export const fetchStreams = () => {
    return async (dispatch) => {
        const response = await streams.get('/streams');
        dispatch({ type: ACTIONS.GET_STREAMS, payload: response.data })
    }
}

export const editStream = (formValues, id) => {
    return async (dispatch) => {
        const response = await streams.patch(`/streams/${id}`, formValues);
        dispatch({ type: ACTIONS.EDIT_STREAM, payload: response.data })
        history.push('/');
    }
}
export const deleteStream = (id) => {
    return async (dispatch) => {
        await streams.delete(`/streams/${id}`);
        dispatch({ type: ACTIONS.DELETE_STREAM, payload: id })
        history.push('/');
    }
}