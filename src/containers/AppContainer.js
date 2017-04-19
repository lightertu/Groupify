import React, {Component, PropTypes} from 'react'
import {browserHistory, Router, Route} from 'react-router'
import {Provider} from 'react-redux'


class AppContainer extends Component {
    static propTypes = {
        routes: PropTypes.object.isRequired,
        store: PropTypes.object.isRequired
    }

    shouldComponentUpdate() {
        return false
    }

    /*<div style={{height: '100%'}}>*/
    render() {
        const {routes, store} = this.props
        // const Survey = () => <h1>We are located at 555 Jackson St. {this.props.id}</h1>
        return (
            <Provider store={ store }>
                <div>
                    <Router history={ browserHistory } children={ routes }>
                    </Router>
                </div>
            </Provider>
        )
    }
}

export default AppContainer
