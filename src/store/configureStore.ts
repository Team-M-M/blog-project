// *** 슬라이스들을 통합한 store RootState 정의 ***

import { configureStore, Action, ThunkAction } from '@reduxjs/toolkit';
// import { curryGetDefaultMiddleware } from '@reduxjs/toolkit/dist/getDefaultMiddleware';
import { createWrapper } from 'next-redux-wrapper';
import reducer from './modules';

const isProduction = process.env.NODE_ENV === 'production';

// redux store 생성 함수
const makeStore = (context: any) =>
  configureStore({
    reducer,
    devTools: process.env.NODE_ENV === 'development', // 개발자도구 설정
    // middleware, // 불필요시 생략
  });

//store 생성
// const store = makeStore();
// store export
// export default store;

// nextjs에서 사용하기 위해 감싸기
const wrapper = createWrapper(makeStore, { debug: !isProduction });
export default wrapper;

//RootState export
export type RootState = ReturnType<typeof makeStore>;

export type AppDispatch = typeof makeStore;
