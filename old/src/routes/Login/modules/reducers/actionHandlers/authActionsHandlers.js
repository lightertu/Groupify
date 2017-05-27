import isEmpty from 'lodash/isEmpty';

let handleSetCurrentUser = (state, user) => {
    return  Object.assign({}, state, {
      	isAuthenticated: !isEmpty(user),
        user: user
      });
};

export {
    handleSetCurrentUser
}