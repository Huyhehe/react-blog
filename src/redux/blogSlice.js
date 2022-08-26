import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    blogList: [],
  },
  reducers: {
    update: (state, action) => {
      if (action.payload != null) {
        state.blogList = action.payload;
      }
    },
  },
});

export const { update } = blogSlice.actions;
export default blogSlice.reducer;
