import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import facultyServices from '../../services/facultyServices';

export const getFaculty = createAsyncThunk(
  'faculty/getFaculty',
  async (keyword) => {
    const response = await facultyServices.fetchFaculty(keyword);
    return response.data;
  }
);

export const getFacultyById = createAsyncThunk(
  'faculty/getFacultyById',
  async (facultyId, thunkAPI) => {
    try {
      const response = await facultyServices.getFacultyById(facultyId);
      return { userData: response.data, facultyId };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const facultySlice = createSlice({
  name: 'faculty',
  initialState: {
    dataList: [],
    dataById: [],
    status: 'idle',
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getFaculty.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getFaculty.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dataList = action.payload.data;
        state.loading = false;
      })
      .addCase(getFaculty.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      })
      .addCase(getFacultyById.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getFacultyById.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.dataById = action.payload;
        state.loading = false;
      })
      .addCase(getFacultyById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default facultySlice;