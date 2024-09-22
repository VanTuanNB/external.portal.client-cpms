import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slice/authSlice';
import facultyReducer from './slice/facultySlice';
import courseReducer from './slice/courseSlice';
import curriculumReducer from './slice/curriculumSlice';
import newsReducer from './slice/newsSlice';
import schoolReducer from './slice/schoolSlice';
import { thunk } from 'redux-thunk';

export const store = configureStore({
  reducer: {
    auth: authReducer.reducer,
    faculty: facultyReducer.reducer,
    course: courseReducer.reducer,
    curriculum: curriculumReducer.reducer,
    news: newsReducer.reducer,
    school: schoolReducer.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk), 
});