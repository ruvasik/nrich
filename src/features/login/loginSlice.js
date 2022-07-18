import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {authLogin} from './loginAPI';

const initialState = {
  logged: sessionStorage.getItem('logged') === 'yes' ? 'yes' : null,
  status: null,
};

export const loginAsync = createAsyncThunk(
  'login/authLogin',
  async (data) => {
    const response = await authLogin(data);
    if (response.status > 399 && response.status < 500) return 'no';
    else if (response.status === 200) return 'yes';
    else return null;
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
        sessionStorage.setItem('logged', action.payload);
        state.logged = action.payload;
      });
  },
});

export const selectLogged = (state) => state.login.logged;

export default loginSlice.reducer;
