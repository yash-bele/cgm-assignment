import { createSlice } from "@reduxjs/toolkit";

const initialState = { users: [] };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setUsers: (state, { payload }) => {
      state.users = [];
    },
  },
});

export default appSlice.reducer;
export const { setUsers } = appSlice.actions;
