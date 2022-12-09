import { useState } from 'react';
import Button from '../Button';

/**
 * 유입 경로 땡큐 사이트에서 접속
 * @returns
 */
export default function ThankqRoute() {
  //campingRoute 컴포넌트의 setIsDisabled와는 다른 것을 불러옴
  const [disabled, setIsDisabled] = useState(false);

  return (
    <div className="btm_foot">
      <div className="btn_set type2">
        <ul>
          <li>
            <button className="btn_share">
              <span></span>
            </button>
          </li>
          <li>
            <button className="btn_jjim">
              <span></span>
            </button>
          </li>
          <li className="btn_wp">
            <Button setIsDisabled={setIsDisabled}>{!disabled ? '예약확인' : '사이트를 선택해 주세요'}</Button>
          </li>
        </ul>
      </div>
    </div>
  );
}
