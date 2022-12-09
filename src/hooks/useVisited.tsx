import { useEffect, useState } from 'react';

/**
 * 다시보지 않기 일주일용 활성화 로직
 * @param onToggle
 * @returns 활성화 state / FC
 */

type returnType = [disabled: boolean, changeDisabled: (boolean: boolean) => void];

const useVisited = (click: any): returnType => {
  const [disabled, setDisabled] = useState(false);
  console.log(click, 'state');

  const changeDisabled = (boolean: boolean): void => {
    setDisabled(boolean);
  };

  useEffect(() => {
    const handleShowModal = () => {
      const WEEK_VISITED_BEFORE = Number(localStorage.getItem('hasWeekVisitedBefore'));

      if (WEEK_VISITED_BEFORE) {
        if (WEEK_VISITED_BEFORE > new Date().getTime()) {
          console.log('before one week :::');
          changeDisabled(true);
        }
      } else if (click) {
        let DATE: any = new Date();
        DATE = DATE.setTime(DATE.getTime() + 1000 * 60 * 60 * 24 * 7);
        localStorage.setItem('hasWeekVisitedBefore', DATE);
        console.log('WEEK TIME :::', Date.parse(DATE));
        changeDisabled(true);
      } else if (WEEK_VISITED_BEFORE < new Date().getTime()) {
        localStorage.removeItem('hasWeekVisitedBefore');
        console.log('after one week :::');
        changeDisabled(false);
      } else {
        changeDisabled(false);
      }
    };
    handleShowModal();
  }, [click]);

  return [disabled, changeDisabled];
};

export default useVisited;
