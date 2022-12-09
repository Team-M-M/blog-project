import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type StateType = {
  price: number;
};

const initialState: StateType = {
  price: 0,
};

const food = createSlice({
  name: 'foodPrice',
  initialState,
  reducers: {
    plusAllFoodPrice(state: StateType, action: PayloadAction<number>) {
      state.price = state.price + action.payload;
    },
    minusAllFoodPrice(state: StateType, action: PayloadAction<number>) {
      state.price = state.price - action.payload;
    },
  },
});

export const { plusAllFoodPrice, minusAllFoodPrice } = food.actions;

export default food.reducer;
