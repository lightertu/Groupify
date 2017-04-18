import React, {Component, PropTypes} from 'react'
import {browserHistory, Router} from 'react-router'
import {Provider} from 'react-redux'


class AppContainer extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return false
    }

    /*<div style={{height: '100%'}}>*/
    render() {
        const {routes, store} = this.props;

        return (
            <Provider store={ store }>
                <div>
                    <Router history={ browserHistory } children={ routes }/>
                </div>
            </Provider>
        );
    }
}

export default AppContainer
