import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginAPI } from './authApi';

export const loginAsync = createAsyncThunk('login/loginAsync', async (credentials) => {
  try {
    const response = await loginAPI(credentials);
    return response;
  } catch (error) {
    throw error;
  }
});

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    status: 'idle', 
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        console.log('Login successful:', action.payload.message);
        state.message = action.payload.message;
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectLoginStatus = (state) => state.login.status;
export const selectLoginrMessage = (state) => state.login.message;

export default loginSlice.reducer;
