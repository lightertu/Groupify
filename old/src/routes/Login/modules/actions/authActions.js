export const SET_CURRENT_USER = "SET_CURRENT_USER";
let setCurrentUser = (user) => {
    return { type: SET_CURRENT_USER, user: user };
};

export {
    setCurrentUser
}
