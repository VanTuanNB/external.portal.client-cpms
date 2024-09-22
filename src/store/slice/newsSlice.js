import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "../../services/newsServices";

export const getNews = createAsyncThunk("news", async (payload) => {
  try {
    const response = await newsService.fetchNews(payload);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.response.data);
  }
});

const newsSlice = createSlice({
  name: "news",
  initialState: {
    data: [],
    status: "idle",
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload.data.items;
        state.loading = false;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        state.loading = false;
      });
  },
});

export default newsSlice;
