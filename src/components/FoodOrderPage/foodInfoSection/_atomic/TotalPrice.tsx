import React from 'react';
import { useSelector } from 'react-redux';

export default function TotalPrice() {
  // selector의 두번 째 인자인 callback은 렌더링 방지용 비교문
  const totalPrice = useSelector(
    (state: any) => state.food.price,
    (left, right) => left.price !== right.price
  );

  return (
    <div className="bar_sort">
      <div className="total_div">
        <p className="tit">총 이용금액</p>
        <p className="price">
          {totalPrice}
          <span>원</span>
        </p>
      </div>
      <p className="addr">경남 거창군 북상면 덕유월성로 1199 월성 자연캠핑야영장</p>
    </div>
  );
}
