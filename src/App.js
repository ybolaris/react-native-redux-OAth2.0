import React from "react";
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import RootNavigatorWithState from "./NavigationRoot";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    }

    render() {
        return (
            <Provider store={this.store}>
                <RootNavigatorWithState/>
            </Provider>
        );
    }
}

export default App;
