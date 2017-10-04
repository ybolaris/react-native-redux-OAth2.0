import React, {Component} from "react";
import {connect} from "react-redux";
import {View, ActivityIndicator, Button} from "react-native";

import {Card} from "../components/Card";
import {navigateLogin} from "../actions/NavActions";

class WelcomeScreen extends Component {
    static navigationOptions = {
        title: "Welcome!"
    };

    constructor(props) {
        super(props);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    onButtonPress() {
        this.props.navigateLogin();
    }

    renderButton() {
        if (this.props.loading) {
            return <ActivityIndicator size="large"/>;
        }

        return (
            <Button
                title="Login"
                onPress={this.onButtonPress}
            />
        );
    }

    render() {
        return (
            <View style={styles}>
                <Card>
                    {this.renderButton()}
                </Card>
            </View>
        );
    }
}

const styles = {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
};

const mapStateToProps = ({auth}) => {
    return {
        loading: auth.loading
    };
};

export default connect(mapStateToProps, {navigateLogin})(WelcomeScreen);
