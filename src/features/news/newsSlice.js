import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getNews } from './newsAPI';

const initialState = {
  news: [],
  status: null,
};

export const getNewsAsync = createAsyncThunk(
  'news/getNewsAsync',
  async () => {
    const response = await getNews();
    return await response.json();
  }
);

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getNewsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getNewsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.news = action.payload?.articles;
      });
  },
});

export const selectNews = (state) => state.news.news;
export const selectStatus = (state) => state.news.status === 'loading';

export default newsSlice.reducer;
