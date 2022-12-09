export default function InfoDiv() {
  return (
    <>
      <div className='info_div type2'>
        <dl>
          <dt>예약번호</dt>
          <dd>5309136</dd>
        </dl>
        <dl>
          <dt>사이트(객실)</dt>
          <dd>A사이트, 3</dd>
        </dl>
        <dl>
          <dt>기간</dt>
          <dd>11.03(수) ~ 11.04(목) / 1박</dd>
        </dl>
        <dl>
          <dt>예약인원</dt>
          <dd>총 4명 (성인 2명, 소인 2명)</dd>
        </dl>
        <dl>
          <dt>예약차량</dt>
          <dd>1대</dd>
        </dl>
        <dl>
          <dt>숙박요금(1박)</dt>
          <dd>
            <em>50,000원</em>
            11.03(수) ~ 11.04(목) / 평일 : 50,000원
          </dd>
        </dl>

        <div className='total_div'>
          <p className='tit'>총 이용금액</p>
          <p className='price'>
            50,000<span>원</span>
          </p>
        </div>
      </div>
    </>
  );
}
