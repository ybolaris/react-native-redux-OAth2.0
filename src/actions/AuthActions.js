import {AsyncStorage} from "react-native";
import {
    UPDATE_TOKEN,
    AUTH_START_LOADING,
    AUTH_STOP_LOADING
} from "../actions/types";
import {navigateMain, navigateWelcome} from "./NavActions";

//user
export const checkToken = () => {
    return (dispatch) => {
        return AsyncStorage.getItem("auth")
            .then((token) => {
                dispatch(updateToken(token));
                token ? dispatch(navigateMain()) : dispatch(navigateWelcome());
            });
    };
};

export const storeToken = (token) => {
    return (dispatch) => {
        dispatch(updateToken(token));
        return AsyncStorage.setItem("auth", token)
            .then(() => {
                    if (token) {
                        dispatch(navigateMain());
                    } else {
                        dispatch(navigateWelcome());
                    }
                }
            );
    };
};

export const updateToken = (token) => {
    return {
        type: UPDATE_TOKEN,
        payload: token
    };
};


export const startLoading = () => {
    return {
        type: AUTH_START_LOADING
    };
};

export const stopLoading = () => {
    return {
        type: AUTH_STOP_LOADING
    };
};

