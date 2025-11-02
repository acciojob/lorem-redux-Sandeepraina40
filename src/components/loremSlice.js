import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchLorem = createAsyncThunk('lorem/fetchLorem', async () => {
  try {
    const response = await axios.get('https://api.lorem.com/ipsum');
    const data = response.data;
    // Handle both Title/Body and title/body formats
    return {
      title: data.Title || data.title || 'Lorem Ipsum',
      body: data.Body || data.body || ''
    };
  } catch (error) {
    // Fallback mock data if API doesn't exist
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      title: 'Lorem Ipsum',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    };
  }
});

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    loading: false,
    data: null,
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default loremSlice.reducer;
