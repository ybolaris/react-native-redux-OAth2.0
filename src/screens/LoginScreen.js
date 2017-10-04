import React, {Component} from "react";
import {connect} from "react-redux";
import {WebView} from "react-native";
import {uri} from "../../values.json";
import {storeToken} from "../actions/AuthActions";

class LoginScreen extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.onWebViewStateChange = this.onWebViewStateChange.bind(this);
    }

    //catch redirect URI and extract token
    onWebViewStateChange(webViewState) {
        const url = webViewState.url;
        if (url.includes("token=")) {
            const split = webViewState.url.split("token=");
            this.props.storeToken(split[1]);
        }
    }

    render() {
        return (
            <WebView
                source={{uri}}
                onNavigationStateChange={this.onWebViewStateChange}
            />
        );
    }
}

const mapStateToProps = ({auth}) => {
    return {
        token: auth.token
    };
};

export default connect(mapStateToProps, {storeToken})(LoginScreen);
