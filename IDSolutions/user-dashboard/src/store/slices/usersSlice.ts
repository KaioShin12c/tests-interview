import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [],
    search: null,
  },
  reducers: {
    setUsers(state, action) {
      state.data = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    clearSearch(state) {
      state.search = null;
    },
  },
});

const usersReducer = usersSlice.reducer;

export const { setUsers, setSearch, clearSearch } = usersSlice.actions;

export { usersReducer };
