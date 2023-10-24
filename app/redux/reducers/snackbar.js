import { createSlice } from '@reduxjs/toolkit';

export const SNACKBAR_SEVERITY = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

const initialState = {
  open: false,
  severity: SNACKBAR_SEVERITY.INFO,
  message: '',
  autoHideDuration: 6000,
};

const snackbarReducers = createSlice({
  name: 'snackbarManage',
  initialState,
  reducers: {
    show: (state, action) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity ?? initialState.severity;
      state.autoHideDuration =
        action.payload.autoHideDuration ?? initialState.autoHideDuration;
    },
    hide: (state) => {
      state.open = false;
      state.autoHideDuration = initialState.autoHideDuration;
    },
  },
});

export const { show, hide } = snackbarReducers.actions;
export default snackbarReducers.reducer;
