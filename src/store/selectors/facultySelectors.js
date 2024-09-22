const safeAccess = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const selectFacultyState = (state) => {
  return safeAccess(state, 'faculty') || {};
};

export const selectFacultyData = (state) => {
  const curriculumState = selectFacultyState(state);
  return curriculumState.dataList.items || [];
};

export const selectFacultyLoading = (state) => {
  const curriculumState = selectFacultyState(state);
  return curriculumState.loading || false;
};

export const selectFacultyError = (state) => {
  const curriculumState = selectFacultyState(state);
  return curriculumState.error || null;
};

export const selectFacultyByIdState = (state) => {
  return safeAccess(state, 'faculty') || {};
};

export const selectFacultyByIdData = (state) => {
  const curriculumState = selectFacultyByIdState(state);
  return curriculumState.dataById || [];
};

export const selectFacultyByIdLoading = (state) => {
  const curriculumState = selectFacultyByIdState(state);
  return curriculumState.loading || false;
};

export const selectFacultyByIdError = (state) => {
  const curriculumState = selectFacultyByIdState(state);
  return curriculumState.error || null;
};
