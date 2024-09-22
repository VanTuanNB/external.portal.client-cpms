export const selectCourseData = (state) => state.course.data;
export const selectCourseStatus = (state) => state.course.status;
export const selectCourseError = (state) => state.course.error;
export const selectCourseLoading = (state) => state.course.loading;

export const selectCourseState = (state) => ({
  data: selectCourseData(state),
  status: selectCourseStatus(state),
  error: selectCourseLoading(state),
  loading: selectCourseLoading(state),
});
