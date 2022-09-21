import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    isShowUp: false,
    message: "This message",
    isSuccessful: null,
  },
  reducers: {
    updateCondition: (state, action) => {
      return {
        ...state,
        isShowUp: action.payload,
      };
    },
    updateMessage: (state, action) => {
      return {
        ...state,
        message: action.payload,
      };
    },
    updateStatus: (state, action) => {
      return {
        ...state,
        isSuccessful: action.payload,
      };
    },
  },
});

export const { updateCondition, updateMessage, updateStatus } =
  notificationSlice.actions;
export default notificationSlice.reducer;
