import React, { Component, PropTypes } from 'react'
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
       <MuiThemeProvider>
           <Provider store={store}>
           <div style={{ height: '100%' }}>
             <Router history={browserHistory} children={routes} />
           </div>
         </Provider>
       </MuiThemeProvider>
    )
  }
}

export default AppContainer
