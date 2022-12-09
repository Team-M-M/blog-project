import { useEffect, useState, useRef } from "react";
import Calendar from "react-calendar";
import dayjs from "dayjs";
import { useSelector, useDispatch } from "react-redux";
import { stayDayActions } from "../../../../store/modules/stayDaySlice";

const DATE = new Date();
/*API에서 받아올 데이터 
  STAY_DAYS: 숙박 총 일수
  dummy: 데이터
*/
const STAY_DAYS = 6;
const useTimeDummy = {
  siteTp: "",
  checkInTime: "16:00",
  checkOutTime: "",
};
const checkInTime = useTimeDummy.checkInTime.split(":");
const dummy = {
  data: {
    resDtTp: "F",
    reserveAbleEndDt: "20230331",
    calendarList: [
      {
        resDt: "20221201",
        weeekDay: "thu",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221202",
        weeekDay: "fri",
        isReserveAble: true,
        isWeekendFee: true,
      },
      {
        resDt: "20221203",
        weeekDay: "sat",
        isReserveAble: false,
        isWeekendFee: true,
      },
      {
        resDt: "20221204",
        weeekDay: "sun",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221205",
        weeekDay: "mon",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221206",
        weeekDay: "tue",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221207",
        weeekDay: "wed",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221208",
        weeekDay: "thu",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221209",
        weeekDay: "fri",
        isReserveAble: false,
        isWeekendFee: true,
      },
      {
        resDt: "20221210",
        weeekDay: "sat",
        isReserveAble: true,
        isWeekendFee: true,
      },
      {
        resDt: "20221211",
        weeekDay: "sun",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221212",
        weeekDay: "mon",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221213",
        weeekDay: "tue",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221214",
        weeekDay: "wed",
        isReserveAble: true,
        isWeekendFee: false,
      },
      {
        resDt: "20221215",
        weeekDay: "thu",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221216",
        weeekDay: "fri",
        isReserveAble: false,
        isWeekendFee: true,
      },
      {
        resDt: "20221217",
        weeekDay: "sat",
        isReserveAble: true,
        isWeekendFee: true,
      },
      {
        resDt: "20221218",
        weeekDay: "sun",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221219",
        weeekDay: "mon",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221220",
        weeekDay: "tue",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221221",
        weeekDay: "wed",
        isReserveAble: false,
        isWeekendFee: false,
      },
      {
        resDt: "20221223",
        weeekDay: "fri",
        isReserveAble: true,
        isWeekendFee: true,
      },
      {
        resDt: "20221224",
        weeekDay: "sat",
        isReserveAble: true,
        isWeekendFee: true,
      },
    ],
  },
};

/*API 받아온 데이터 사용
  STAY_END_DATE: 예약 가능한 마지막 날짜(reserveAbleEndDt)
  UNABLE_STAYDAYS: isReserveAble 가능한 날짜("YYYYMMDD" 형태의 resDt 배열)
  WEEKENDFEE_DAYS: 주말 금액 적용되는 날짜
*/
const STAY_END_DATE = dayjs(dummy.data.reserveAbleEndDt, "YYYYMMDD").toDate();
export const UNABLE_STAYDAYS = dummy.data.calendarList
  .filter((item) => item.isReserveAble === false)
  .map((item) => item.resDt);

const WEEKENDFEE_DAYS = dummy.data.calendarList
  .filter((item) => item.isWeekendFee === true)
  .map((item) => item.resDt);

export const formattingDate = (date: Date) => {
  return dayjs(date).format("YYYYMMDD");
};
export const formattingMonth = (date: Date) => {
  return dayjs(date).format("YYYYMM");
};
interface Props {
  onChangeSelect: (event: any) => void;
}
export default function CalendarUI({ onChangeSelect }: Props) {
  const stayDates = useSelector((state: any) => state.stayDay.stayDates);
  const selectStayDay = useSelector(
    (state: any) => state.stayDay.selectStayDay
  );
  const dispatch = useDispatch();
  const calendarRef: any = useRef();

  const [value, onChange] = useState(new Date());
  const [activeDate, setActiveDate] = useState<Date>(new Date());

  useEffect(() => {
    if (checkInTime[0] <= dayjs(DATE).get("h").toString()) {
      UNABLE_STAYDAYS.push(dayjs(DATE).format("YYYYMMDD"));
    }
    dispatch(stayDayActions.setStayDays(STAY_DAYS));
  }, [dispatch]);

  useEffect(() => {
    dispatch(stayDayActions.selectStayRangeToOption());
    stayDates.length >= 1 &&
      dispatch(stayDayActions.checkedUnableStay(UNABLE_STAYDAYS));
  }, [dispatch, selectStayDay]);

  useEffect(() => {
    const activeDateMonth = formattingMonth(activeDate);
    const startDateMonth = formattingMonth(DATE);
    const arr: any = calendarRef.current.querySelector(
      ".react-calendar__navigation__prev-button"
    );

    if (activeDateMonth === startDateMonth) {
      arr.style.opacity = 0.5;
    } else {
      arr.style.opacity = 1;
    }
  }, [activeDate]);

  const returnClassName = (date: Date) => {
    let rtName = "";
    if (date.getDay() === 0) {
      rtName = "rc-sunday";
    } else if (date.getDay() === 6) {
      rtName = "rc-saturday";
    }
    WEEKENDFEE_DAYS.forEach((item) => {
      if (formattingDate(date) === item) {
        rtName += " rc-weekendFee";
      }
    });
    UNABLE_STAYDAYS.forEach((item) => {
      if (formattingDate(date) === item) {
        rtName = " rc-disable";
      }
    });
    if (parseInt(formattingDate(date)) < parseInt(formattingDate(DATE))) {
      rtName = " rc-disable";
    }
    if (
      stayDates.length === 1 &&
      formattingDate(stayDates[0]) === formattingDate(date)
    ) {
      return "rc-active activeSelect";
    }
    if (
      stayDates.length === 2 &&
      formattingDate(stayDates[0]) <= formattingDate(date) &&
      formattingDate(date) <= formattingDate(stayDates[1])
    ) {
      if (formattingDate(stayDates[0]) === formattingDate(date)) {
        return "rc-active activeStart";
      }
      if (formattingDate(stayDates[1]) === formattingDate(date)) {
        return "rc-active activeEnd";
      }
      return "rc-active";
    }
    return rtName;
  };

  return (
    <>
      <Calendar
        calendarType='US'
        inputRef={calendarRef}
        formatDay={(locale, date) => dayjs(date).format("D")}
        onChange={onChange}
        onClickDay={(value) => {
          dispatch(stayDayActions.selectStayRange(value.toString()));
          onChangeSelect(dayjs(value).format("YYYYMMDD"));
          dispatch(stayDayActions.checkedUnableStay(UNABLE_STAYDAYS));
          dispatch(stayDayActions.checkedStayDays());
          dispatch(stayDayActions.setStayDayArray());
        }}
        onActiveStartDateChange={({ action, activeStartDate }) => {
          const activeDateMonth = formattingMonth(activeDate);
          const stayEndMonth = formattingMonth(STAY_END_DATE);
          setActiveDate(activeStartDate);
          if (
            parseInt(activeDateMonth) >= parseInt(stayEndMonth) &&
            action === "next"
          ) {
            onChange(STAY_END_DATE);
            alert("해당월은 예약이 불가능합니다.");
          } else {
            onChange(activeStartDate);
          }
        }}
        tileClassName={({ date }) => returnClassName(date)}
        minDetail='month'
        maxDetail='month'
        defaultView='month'
        minDate={DATE}
        activeStartDate={value}
      />
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(``)).json();
  return {
    props: {
      results,
    },
  };
}
