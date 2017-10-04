import {NavigationActions} from "react-navigation";

import {RootNavigator} from "../NavigationRoot";
import {NAVIGATE_WELCOME, NAVIGATE_LOGIN, NAVIGATE_MAIN} from "../actions/types";

const initAction = RootNavigator.router.getActionForPathAndParams("Splash");
const initialNavState = RootNavigator.router.getStateForAction(
    initAction
);

export default (state = initialNavState, action) => {
    let nextState;
    //use 'activeScreen' for customizing the navigation
    const activeScreen = state.routes[state.index].routeName;
    switch (action.type) {
        case NAVIGATE_LOGIN:
            nextState = RootNavigator.router.getStateForAction(
                NavigationActions.navigate({routeName: "Auth"}),
                state);
            break;
        case NAVIGATE_MAIN:
            if (activeScreen === "Splash" || activeScreen === "Auth") {
                //reset the navigation if navigating to Main from Auth or Splash screen
                nextState = RootNavigator.router.getStateForAction(
                    NavigationActions.reset({
                        index: 0,
                        actions: [
                            {type: NavigationActions.NAVIGATE, routeName: "Main"}
                        ],
                        key: null
                    }),
                    state
                );
            }
            break;
        case NAVIGATE_WELCOME:
            if (activeScreen === "Auth") {
                //simply go back if navigating from Auth screen to Welcome screen
                nextState = RootNavigator.router.getStateForAction(
                    NavigationActions.back(),
                    state
                );
            } else {
                //reset the navigation if navigating to Welcome from Splash or Main screen
                nextState = RootNavigator.router.getStateForAction(
                    NavigationActions.reset({
                        index: 0,
                        actions: [
                            {type: NavigationActions.NAVIGATE, routeName: "Welcome"}
                        ],
                        key: null
                    }),
                    state
                );
            }
            break;
        default:
            //default react-navigation behavior
            nextState = RootNavigator.router.getStateForAction(action, state);
            break;
    }
    return nextState || state;
};
