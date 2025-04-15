export const selectUser = (state) => state.auth.user;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const userToken = (state) => state.auth.token;
export const refreshPage = (state) => state.auth.isRefreshing;