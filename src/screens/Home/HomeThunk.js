import {createAsyncThunk} from '@reduxjs/toolkit';

export const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    console.log('ktraaaaaaaaaaaaaaaaa');
    const resp = await fetch('http://svcy3.myclass.vn/api/Product');
    const json = await resp.json();

    return json.content;
  },
);
