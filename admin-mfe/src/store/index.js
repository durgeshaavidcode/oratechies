import { configureStore, createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { sidebarOpen: true },
  reducers: {
    toggleSidebar: (s) => {
      s.sidebarOpen = !s.sidebarOpen;
    },
  },
});

export const { toggleSidebar } = uiSlice.actions;

export const store = configureStore({
  reducer: { ui: uiSlice.reducer },
});
