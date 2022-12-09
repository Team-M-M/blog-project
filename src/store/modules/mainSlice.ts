import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  data: object;
};

const initialState: StateType = {
  data: {},
};

const mainData = createSlice({
  name: 'mainData',
  initialState,
  reducers: {
    editData(state: StateType, action: PayloadAction<object>) {
      state.data = { ...state.data, ...action.payload };
    },
  },
});

export const { editData } = mainData.actions;

export default mainData.reducer;
