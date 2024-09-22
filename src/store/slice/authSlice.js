import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import authServices from '../../services/authServices';

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await authServices.login(payload);
      const token = response.data.data.accessToken;
      const userId = response.data.data.userId;
      await dispatch(getUserById({ userId, token }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { dispatch, rejectWithValue }) => {
    try {
      const response = await authServices.register(payload);
      const token = response.data.data.accessToken;
      const userId = response.data.data.userId;
      await dispatch(getUserById({ userId, token }));
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const admissionRegister = createAsyncThunk(
  "admissions",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await authServices.admissionRegister(payload);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getUserById = createAsyncThunk(
  'auth/getUserById',
  async ({ userId, token }, thunkAPI) => {
    try {
      const response = await authServices.getUserById(userId, token);
      return { userData: response.data, userId, token };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    token: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      Cookies.remove("accessToken");
      Cookies.remove("user");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.accessToken;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.accessToken;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(admissionRegister.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(admissionRegister.fulfilled, (state, action) => {
        state.isLoading = false;
        state.token = action.payload.data.accessToken;
      })
      .addCase(admissionRegister.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getUserById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.userData;
        state.token = action.payload.token;
        if (state.token) {
          Cookies.set("accessToken", state.token);
          Cookies.set("user", action.payload.userId);
        }
        if (state.user) {
        }
      })
      .addCase(getUserById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice;
