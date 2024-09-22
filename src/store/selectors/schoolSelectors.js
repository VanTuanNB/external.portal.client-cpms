export const selectSchoolData = (state) => state.school.data;
export const selectSchoolStatus = (state) => state.school.status;
export const selectSchoolLoading = (state) => state.school.loading;
export const selectSchoolError = (state) => state.school.error;

export const selectSchoolState = (state) => ({
  data: selectSchoolData(state),
  status: selectSchoolStatus(state),
  loading: selectSchoolLoading(state),
  error: selectSchoolError(state),
});