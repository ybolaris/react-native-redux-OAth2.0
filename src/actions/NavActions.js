import CookieManager from "react-native-cookies";
import {
    NAVIGATE_WELCOME,
    NAVIGATE_LOGIN,
    NAVIGATE_MAIN
} from "./types";
import {startLoading, stopLoading} from "./AuthActions";

export const navigateLogin = () => {
    return (dispatch) => {
        dispatch(startLoading());
        return CookieManager.clearAll()
            .then(() => {
                dispatch({type: NAVIGATE_LOGIN});
                dispatch(stopLoading());
            });
    };
};

export const navigateMain = () => {
    return {
        type: NAVIGATE_MAIN
    };
};

export const navigateWelcome = () => {
    return {
        type: NAVIGATE_WELCOME
    };
};
