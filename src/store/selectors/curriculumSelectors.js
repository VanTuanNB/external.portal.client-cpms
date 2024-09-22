const safeAccess = (obj, path) => {
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
};

export const selectCurriculumState = (state) => {
  return safeAccess(state, 'curriculum') || {};
};

export const selectCurriculumData = (state) => {
  const curriculumState = selectCurriculumState(state);
  return curriculumState.data.items || [];
};

export const selectCurriculumLoading = (state) => {
  const curriculumState = selectCurriculumState(state);
  return curriculumState.loading || false;
};

export const selectCurriculumError = (state) => {
  const curriculumState = selectCurriculumState(state);
  return curriculumState.error || null;
};
