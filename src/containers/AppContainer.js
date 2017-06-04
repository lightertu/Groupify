import React, {Component, PropTypes} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {Provider} from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'



class AppContainer extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    /*<div style={{height: '100%'}}>*/
    render() {
        const {routes, store} = this.props;
        const history = syncHistoryWithStore(browserHistory, store)

        return (
            <Provider store={ store }>
                <div>
                    <Router history={ history } children={ routes }>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default AppContainer
