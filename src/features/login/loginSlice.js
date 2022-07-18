import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authLogin } from './loginAPI';

const initialState = {
  logged: !!localStorage.getItem('logged'),
};

export const loginAsync = createAsyncThunk(
  'login/authLogin',
  async (login, password) => {
    const response = await authLogin(login, password);
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logged = action.payload;
      });
  },
});

export const selectLogged = (state) => state.login.logged;

export default loginSlice.reducer;
