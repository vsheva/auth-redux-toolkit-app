//slice #2
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: { isAuthenticated: false },
  reducers: {

    login(state, action) {
      state.isAuthenticated = true;
    }, //mutating
    logout(state, action) {
      state.isAuthenticated = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice; //* берем часть
