import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import curriculumService from "../../services/curriculumServices";

export const getCurriculum = createAsyncThunk("curriculum", async (payload) => {
  try {
    const response = await curriculumService.fetchCurriculum(payload);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const curriculumSlice = createSlice({
  name: "curriculum",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCurriculum.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getCurriculum.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data;
        state.loading = false;
      })
      .addCase(getCurriculum.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default curriculumSlice;
