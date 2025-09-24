import { createSlice } from "@reduxjs/toolkit";
import { fetchUsersThunk } from "../thunk/UserDataThunk";

const initialState = {
  users: [],
  loader: false,
  error: null,
};

const FetchUserData = createSlice({
  name: "fetchData",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchUsersThunk pending
      .addCase(fetchUsersThunk.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      // fetchUsersThunk fulfilled
      .addCase(fetchUsersThunk.fulfilled, (state, action) => {
        state.loader = false;
        state.error = null;
        state.users = Array.isArray(action.payload) ? action.payload : [];
      })
      // fetchUsersThunk rejected
      .addCase(fetchUsersThunk.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload || action.error.message;
      });
  },
});

export default FetchUserData.reducer;
