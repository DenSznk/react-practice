import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk(
  "products/fetchingProducts",
  async () => {
    const res = await fetch('https://dummyjson.com/products/?skip=5&limit=10')
    const data = await res.json()
    return data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (_, action) => {
      return action.payload.products;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload.products
    })
  }
});

export const {setProducts} = productsSlice.actions
export default productsSlice.reducer
export const selectProducts = state => state.products;