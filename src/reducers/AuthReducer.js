import {
    AUTH_START_LOADING,
    AUTH_STOP_LOADING,
    UPDATE_TOKEN
} from "../actions/types";

const INITIAL_STATE = {
    token: "",
    loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case UPDATE_TOKEN:
            return {...state, token: action.payload};
        case AUTH_START_LOADING:
            return {...state, loading: true};
        case AUTH_STOP_LOADING:
            return {...state, loading: false};
        default:
            return state;
    }
};
