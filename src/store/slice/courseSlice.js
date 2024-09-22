import Cookies from 'js-cookie';
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import courseService from "../../services/courseServices";
import { getUserById } from "./authSlice";

export const registerCourse = createAsyncThunk(
  "user/register-course",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const userId = Cookies.get('user');
      const token = Cookies.get('accessToken');
      const response = await courseService.registerCourse(payload);
      await dispatch(getUserById({ userId, token }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCourse.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(registerCourse.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export const { logout } = courseSlice.actions;
export default courseSlice;
