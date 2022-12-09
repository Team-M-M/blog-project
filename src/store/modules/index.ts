import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

import week from './createSlice';
import food from './foodOrder';
import stayDay from './stayDaySlice';
import mainData from './mainSlice';



const reducer = (state: CombinedState<reducerType> | undefined, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    week,
    food,
    stayDay,
    mainData,
    //여기에 추가
  })(state, action);
};

export default reducer;
