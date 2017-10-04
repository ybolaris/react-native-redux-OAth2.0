import React, {Component} from "react";
import {connect} from "react-redux";
import {View, Button} from "react-native";
import {storeToken} from "../actions/AuthActions";


class MainScreen extends Component {
    static navigationOptions = ({screenProps}) => {
        return (
            {
                title: "Main",
                headerRight: <Button
                    title={"Logout"}
                    onPress={() => screenProps.logout()}
                />
            });
    };

    render() {
        return (
            <View/>
        );
    }
}

const mapStateToProps = ({auth}) => {
    return (
        {
            token: auth.token
        }
    );
};

export default connect(mapStateToProps, {storeToken})(MainScreen);
