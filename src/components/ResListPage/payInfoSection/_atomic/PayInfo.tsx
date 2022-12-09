export default function PayInfo() {
  return (
    <div className='info_div type2'>
      <dl>
        <dt>총 결제금액</dt>
        <dd className='price'>
          50,000<span>원</span>
        </dd>
      </dl>
      <dl>
        <dt>땡큐캠핑 적립금</dt>
        <dd>
          <em>2,000원</em>예약일 다음날 적립됩니다.
        </dd>
      </dl>
      <dl>
        <dt>계좌정보</dt>
        <dd>농협중앙회 / 351-11410771-83 / 변인혜</dd>
      </dl>
      <dl>
        <dt>입금마감일</dt>
        <dd>2022.11.01 03:23:00</dd>
      </dl>
      <dl>
        <dt>결제방법</dt>
        <dd>업체계좌</dd>
      </dl>
      <dl>
        <dt>현재상태</dt>
        <dd>
          <em>입금대기</em>
        </dd>
      </dl>
    </div>
  );
}
