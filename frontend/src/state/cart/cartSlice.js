import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// Funcoes de chamada de API: 

export const fetchCartTotalItems = createAsyncThunk(
    'cart/fetchCartTotalItems',
    async () => {
        const response = await axios.get("/cart/total");
        return response.data.totalItems;
    }
);

export const fetchCartTotalPrice = createAsyncThunk(
    'cart/fetchCartTotalPrice',
    async () => {
        const response = await axios.get("/cart/total-price");
        return response.data.totalPrice.toFixed(2);
    }
);

const cartState = {
  totalItems: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState: cartState,
    reducers: {},
    extraReducers: (builder) => {
        builder
        .addCase(fetchCartTotalItems.fulfilled, (state, action) => {
            state.totalItems = action.payload;
        })
        .addCase(fetchCartTotalPrice.fulfilled, (state, action) => {
            state.totalPrice = action.payload;
        })
    }
})

export const cartActions = {
    fetchCartTotalItems,
    fetchCartTotalPrice,
};

export default cartSlice.reducer;
