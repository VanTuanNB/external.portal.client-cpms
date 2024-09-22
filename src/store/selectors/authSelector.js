export const selectAuthUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectAuthIsLoading = (state) => state.auth.isLoading;
export const selectAuthError = (state) => state.auth.error;

export const selectAuthState = (state) => ({
  user: selectAuthUser(state),
  token: selectAuthToken(state),
  isLoading: selectAuthIsLoading(state),
  error: selectAuthError(state),
});

export const selectIsAuthenticated = (state) => !!selectAuthToken(state);