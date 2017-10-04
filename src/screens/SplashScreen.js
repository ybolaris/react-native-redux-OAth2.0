import React, {Component} from "react";
import {connect} from "react-redux";
import {View, ActivityIndicator} from "react-native";
import {checkToken} from "../actions/AuthActions";

class SplashScreen extends Component {
    static navigationOptions = {
        header: null
    };

    componentDidMount() {
        //check for auth value in AsyncStorage
        this.props.checkToken();
    }

    render() {
        return (
            <View style={styles}>
                <ActivityIndicator size={"large"}/>
            </View>
        );
    }
}

const styles = {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
};

const mapStateToProps = (state) => {
    return {state};
};

export default connect(mapStateToProps, {checkToken})(SplashScreen);
