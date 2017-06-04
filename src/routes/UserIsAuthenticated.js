/**
 * Created by rui on 6/2/17.
 */
import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'


function selector(state) {
    console.log(state);
    return state.authentication.jwtToken;
}

export default UserAuthWrapper({
    /* state.authentication is implemented using immutable */
    authSelector: state => state.authentication.get("jwtToken"),
    redirectAction: routerActions.replace,
    wrapperDisplayName: 'UserIsAuthenticated'
})
