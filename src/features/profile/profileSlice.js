import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { authProfile } from './profileAPI';

const initialState = {
  logged: sessionStorage.getItem('logged') === 'yes' ? 'yes': null,
  status: null,
};

export const profileAsync = createAsyncThunk(
  'profile/authProfile',
  async (data) => {
    const response = await authProfile(data);
    if (response.status > 399 && response.status < 500) return 'no';
    else if (response.status === 200) return 'yes';
    else return null;
  }
);

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(profileAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(profileAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.logged = action.payload;
      });
  },
});

export default profileSlice.reducer;
