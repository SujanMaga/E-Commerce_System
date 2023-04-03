import { createSlice } from "@reduxjs/toolkit";

export const adminUserSlice = createSlice({
  name: "adminUser",
  initialState: {
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    // add user
    addUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    addUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.push(action.payload);
    },
    addUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // get all users
    getUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //delete user
    deleteUserStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      //splice(index, no.of deletetion)
      state.users.splice(
        state.users.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addUserStart,
  addUserSuccess,
  addUserFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = adminUserSlice.actions;

export default adminUserSlice.reducer;
