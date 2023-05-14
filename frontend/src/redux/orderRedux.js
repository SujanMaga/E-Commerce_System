import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    orders: [],
    isFetching: false,
    error: false,
    currentOrder: null, // Add a new property to store the current order
  },
  reducers: {
    // get all orders
    getOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders = action.payload;
    },
    getOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // get order by ID
    getOrderByIdStart: (state) => {
      state.isFetching = true;
      state.error = false;
      state.currentOrder = null; // Clear the currentOrder when fetching a new order
    },
    getOrderByIdSuccess: (state, action) => {
      state.isFetching = false;
      state.currentOrder = action.payload;
    },
    getOrderByIdFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // delete order
    deleteOrderStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteOrderSuccess: (state, action) => {
      state.isFetching = false;
      state.orders.splice(
        state.orders.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteOrderFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  getOrderStart,
  getOrderSuccess,
  getOrderFailure,
  getOrderByIdStart,
  getOrderByIdSuccess,
  getOrderByIdFailure,
  deleteOrderStart,
  deleteOrderSuccess,
  deleteOrderFailure,
} = orderSlice.actions;

export default orderSlice.reducer;
