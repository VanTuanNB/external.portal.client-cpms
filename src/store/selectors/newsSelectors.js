export const selectNewsData = (state) => state.news.data;
export const selectNewsStatus = (state) => state.news.status;
export const selectNewsLoading = (state) => state.news.loading;
export const selectNewsError = (state) => state.news.error;

export const selectNewsState = (state) => ({
  data: selectNewsData(state),
  status: selectNewsStatus(state),
  loading: selectNewsLoading(state),
  error: selectNewsError(state),
});