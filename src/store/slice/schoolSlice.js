import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import schoolService from "../../services/schoolServices";

export const getSchool = createAsyncThunk("school", async (payload) => {
  try {
    const response = await schoolService.fetchSchool(payload);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const schoolSlice = createSlice({
  name: "school",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSchool.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getSchool.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(getSchool.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default schoolSlice;
