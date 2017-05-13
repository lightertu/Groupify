let handleGenerateUser = (state, payload) => {
    return "generating user";
};
let handleGenerateUserSuccess = (state, payload) => {
    return payload;
};
let handleGenerateUserFailure = (state, payload) => {
    return state;
};

export {
    handleGenerateUser,
    handleGenerateUserSuccess,
    handleGenerateUserFailure
}
