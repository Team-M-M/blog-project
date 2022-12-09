import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";

type StateType = {
  stayDates: Array<string>;
  stayDays: number;
  selectValue: Array<string>;
  selectStayDay: string;
};

const initialState : StateType = {
  stayDates: [],
  stayDays: 0,
  selectValue: [],
  selectStayDay: "",
};

const stayDay = createSlice({
  name: "stayDayReducer",
  initialState,
  reducers: {
    setStayDays(state: StateType, action: PayloadAction<number>) {
      // 캠핑장 별 숙박 기간 설정
      state.stayDays = action.payload;
    },
    selectStayRange(state: StateType, action: PayloadAction<string>) {
      // 달력으로 기간 설정
      switch (state.stayDates.length) {
        case 0:
          state.stayDates = [action.payload];
          break;
        case 1:
          if (
            dayjs(state.stayDates[0]).format("YYYYMMDD") >=
            dayjs(action.payload).format("YYYYMMDD")
          ) {
            state.stayDates = [action.payload];
          } else if (
            dayjs(state.stayDates[0]).format("YYYYMMDD") <
            dayjs(action.payload).format("YYYYMMDD")
          ) {
            state.stayDates[1] = action.payload;
          }
          break;
        case 2:
          if (
            dayjs(state.stayDates[1]).format("YYYYMMDD") <
            dayjs(action.payload).format("YYYYMMDD")
          ) {
            state.stayDates[1] = action.payload;
          } else {
            state.stayDates = [action.payload];
          }
          break;
        default:
          break;
      }
    },
    selectStayRangeToOption(state: StateType) {
      // Select로 기간 설정
      if (!state.stayDates[0]) return;
      if (state.selectStayDay === "Invalid Date") return;
      // state.stayDates[1] = state.stayDates[0];
      switch (state.stayDates.length) {
        case 1:
          if (
            dayjs(state.selectStayDay).format("YYYYMMDD") >
            dayjs(state.stayDates[0]).format("YYYYMMDD")
          ) {
            state.stayDates[1] = state.selectStayDay;
          } else {
            state.stayDates = state.stayDates;
          }
          break;
        case 2:
          state.stayDates[1] = state.selectStayDay;
        default:
          break;
      }
    },

    checkedStayDays(state: StateType) {
      // 총 숙박 기간 확인 및 초과 시 오류 alert
      if (state.stayDates.length < 2) {
        return;
      }
      let firstday = dayjs(state.stayDates[0]);
      let expired_at = dayjs(state.stayDates[1]);
      let result = expired_at.diff(firstday, "day", true);
      let d_day = Math.floor(result);

      if (d_day > state.stayDays) {
        alert(`최대 ${state.stayDays}박까지 예약이 가능합니다.`);
        state.stayDates = [];
        state.selectStayDay = "";
        return;
      }
    },

    checkedUnableStay(state: StateType, action: PayloadAction<Array<string>>) {
      // 숙박 불가능한 날짜 및 입력 기간에 포함 시 오류 alert
      if (!state.stayDates[0]) return;
      let firstday = dayjs(state.stayDates[0]).format("YYYYMMDD");
      let expired_at = dayjs(state.stayDates[1]).format("YYYYMMDD");
      let isUnableStay = action.payload.some((item) => {
        if (parseInt(firstday) === parseInt(item)) {
          return true;
        }
        if (
          parseInt(firstday) <= parseInt(item) &&
          parseInt(item) <= parseInt(expired_at)
        ) {
          return true;
        }
      });

      if (isUnableStay) {
        state.selectValue = [];
        alert("예약불가일이 있습니다.");
        state.stayDates = [];
        return;
      }
    },

    setStayDayArray(state: StateType) {
      // Select에 표시될 Option의 value를 채움
      state.selectValue = [];
      if (!state.stayDates[0]) return;
      for (let i = 1; i <= state.stayDays; i++) {
        let stayItem = dayjs(state.stayDates[0])
          .add(i, "day")
          .format("YYYYMMDD");

        state.selectValue.push(stayItem);
      }
    },

    setSelectStayDay(state: StateType, action: PayloadAction<string>) {
      // Select로 선택한 퇴실 날짜를 날짜 형식으로 변환함
      const newStr = action.payload.replace(/\./g, "").substring(0, 8);
      state.selectStayDay = dayjs(newStr, "YYYYMMDD").toDate().toString();
    },
  },
});

export const stayDayActions = stayDay.actions;

export default stayDay.reducer;
