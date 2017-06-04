/**
 * Created by rui on 6/2/17.
 */
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

export default UserAuthWrapper({
    authSelector: state => state.authentication.jwtToken,
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
})
