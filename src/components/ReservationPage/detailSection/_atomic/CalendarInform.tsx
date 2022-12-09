import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { stayDayActions } from 'store/modules/stayDaySlice';

const DynamicCalendarUI = dynamic(() => import('./CalendarUI'), {
  ssr: false,
});

const formattingToStayDayRow = (date: string) => {
  const _selectStayDay = date.slice(0, 4) + '.' + date.slice(4, 6) + '.' + date.slice(6, 8);
  return _selectStayDay;
};

export default function CalendarInform() {
  const stayDates = useSelector((state: any) => state.stayDay.stayDates);
  const stayDayArray: Array<string> = useSelector((state: any) => state.stayDay.selectValue);
  const dispatch = useDispatch();
  const [stayEndDay, setStayEndDay] = useState('선택해주세요');
  const [selectStayDays, setSelectStayDays] = useState<Array<string>>([]);

  const formattingToSelectDay = (date: string) => {
    let firstday = dayjs(stayDates[0]);
    let expired_at = dayjs(date);
    let result = expired_at.diff(firstday, 'day', true);
    let d_day = Math.floor(result);

    const _selectStayDay = formattingToStayDayRow(date) + `(${d_day}박)`;
    return _selectStayDay;
  };

  const formattingToStayDays = useCallback((dates: Array<string>) => {
    const _selectStayDays = dates.map((date, idx) => formattingToStayDayRow(date) + `(${idx + 1}박)`);
    return _selectStayDays;
  }, []);

  const onChangeHandler = (e: any) => {
    setStayEndDay(e.target.value);
  };

  const onChangeSelect = (value: string) => {
    setStayEndDay(formattingToSelectDay(value));
  };

  useEffect(() => {
    const _selectStayDays = formattingToStayDays(stayDayArray);
    setSelectStayDays(['선택해주세요', ..._selectStayDays]);
  }, [formattingToStayDays, stayDayArray]);

  useEffect(() => {
    dispatch(stayDayActions.setSelectStayDay(stayEndDay));
  }, [dispatch, stayEndDay]);

  return (
    <>
      <div className="sec_title">
        <p className="tit">사이트 상세</p>
      </div>
      <DynamicCalendarUI onChangeSelect={onChangeSelect} />
      <div className="view_date">
        <div className="slt_date">
          <div className="gubunBox">
            <span className="slt_gubun">입실</span>
            <div className="gubunTxtBox">
              <span className="slt_gubun_txt">{stayDates[0] ? dayjs(stayDates[0]).format('YYYY.MM.DD') : '선택해주세요'}</span>
            </div>
          </div>
          <em>~</em>
          <div className="gubunBox">
            <span className="slt_gubun">퇴실</span>
            <div className="selwp2">
              <select id="sel_res_days" name="sel_res_days" value={stayEndDay} onChange={onChangeHandler}>
                {selectStayDays.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span className="slt_txt coR1">변경</span>
            </div>
          </div>
        </div>
        {/*
          전달받은 레이아웃 자료에 포함되어있지 않아 주석처리함.
        <span id='spanClock' className='crt_clock'></span>
        {/* goCalendarRefresh(); 
        <span
          id='spanRefresh'
          className='crt_refresh'
          style={{ display: "none" }}
          onClick={() => {}}
        >
          <img
            className='img_refresh'
            src='/images/ico_refresh.png'
            alt='새로고침'
          />
          날짜 새로고침
        </span> */}
      </div>
    </>
  );
}
