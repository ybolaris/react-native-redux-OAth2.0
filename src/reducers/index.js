import {combineReducers} from "redux";
import NavReducer from "./NavReducer";
import AuthReducer from "./AuthReducer";

export default combineReducers({
    nav: NavReducer,
    auth: AuthReducer,
});
