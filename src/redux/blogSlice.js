import { createSlice } from "@reduxjs/toolkit";

export const blogSlice = createSlice({
  name: "blogs",
  initialState: {
    blogList: null,
  },
  reducers: {
    update: (state, action) => {
      if (action.payload != null) {
        return { ...state, blogList: action.payload };
      }
    },
  },
});

export const { update } = blogSlice.actions;
export default blogSlice.reducer;
