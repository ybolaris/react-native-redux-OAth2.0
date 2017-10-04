import React from "react";
import {BackHandler} from "react-native";
import {connect} from "react-redux";
import {addNavigationHelpers, StackNavigator, NavigationActions} from "react-navigation";

import {storeToken} from "./actions/AuthActions";

import SplashScreen from "./screens/SplashScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import AuthScreen from "./screens/LoginScreen";
import MainScreen from "./screens/MainScreen";

export const RootNavigator = StackNavigator({
        Splash: {screen: SplashScreen},
        Welcome: {screen: WelcomeScreen},
        Auth: {screen: AuthScreen},
        Main: {screen: MainScreen},
    },
);

class RootNavigatorWithState extends React.Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    //handling back button in Android
    componentDidMount() {
        BackHandler.addEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    componentWillUnmount() {
        BackHandler.removeEventListener("hardwareBackPress", this.onBackPress.bind(this));
    }

    onBackPress() {
        if (this.props.nav.index === 0) {
            return false;
        }
        this.props.dispatch(NavigationActions.back());
        return true;
    }

    //this function is to be used by a header button
    logout() {
        this.props.dispatch(storeToken(""));
    }

    render() {
        return (
            <RootNavigator
                //using 'screenProps' instead of 'setParams' at component level
                //for avoiding common re-rendering problems
                screenProps={{logout: this.logout}}
                navigation={
                    addNavigationHelpers({dispatch: this.props.dispatch, state: this.props.nav})
                }
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(RootNavigatorWithState);
