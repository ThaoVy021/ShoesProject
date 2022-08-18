import {createSlice} from '@reduxjs/toolkit';
import {fetchProducts} from './HomeThunk';

const initialState = {
  isLoading: false,
  dataProducts: [],
};

const homeSlice = createSlice({
  name: 'homeSlice',
  initialState: initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        console.log('pendingggggggggg');
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        console.log('fulfillllllllllllllll');
        state.dataProducts = action.payload;
      });
  },
});

export default homeSlice.reducer;
