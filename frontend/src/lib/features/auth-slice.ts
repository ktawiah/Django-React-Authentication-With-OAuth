import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  initialState: {
    isAuthenticated: false,
    isLoading: true,
  },
  name: "auth",
  reducers: {
    setAuth: (state) => {
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.isAuthenticated = false;
    },
    finishInitialLoad: (state) => {
      state.isLoading = false;
    },
  },
});

export const { setAuth, logout, finishInitialLoad } = authSlice.actions;
export default authSlice.reducer;
