interface Props {
  item: any;
}

const formattingPrice = (price: number) => {
  return `${price.toLocaleString("ko-KR")}원`;
};
const AlarmBtn = () => (
  <div className='txt_area'>
    <button className='btn_alarm'>
      빈 자 리<br />
      알림신청
    </button>
  </div>
);

export default function SubscrpInform({ item }: Props) {
  return (
    <>
      <li>
        <div className={`site_div ${/*"disabled" :  */ ""}`}>
          <div className='left_div'>
            <div className='pic'>
              <img src='../images/temp/site_temp01.png' alt='' />
            </div>
            <div className='txt_area'>
              {/*item.ableCnt가 없을 때, 예약불가 또는 예약완료 나오는 부분은 API 연결 조건이 나온 후 구현 예정*/}
              {item.ableCnt > 0 && (
                <p className='txt'>
                  예약가능
                  <span>{item.ableCnt}</span>자리
                </p>
              )}
              {item.ableCnt === 0 && item.isEmpty && <AlarmBtn></AlarmBtn>}
            </div>
          </div>
          <div className='txt_box'>
            <p className='tit'>{`[${item.siteNm}]${
              item.siteRmk ? ` (${item.siteRmk})` : ""
            }`}</p>
            <ul
              className={`dtl_site_ul ${
                item.isSiteElec || item.isSitePark ? "" : "ul2"
              }`}
            >
              <li className='camp'>펜션</li>
              {item.isSiteElec ? <li className='ele'>전기사용</li> : <></>}
              <li className='dk'>{item.siteSize}</li>
              {item.isSitePark ? <li className='park'>사이드주차</li> : <></>}
            </ul>
            <p className='pri'>
              {item.originalCampFee !== item.saleCampFee ? (
                <>
                  <span>{formattingPrice(item.originalCampFee)}</span>
                  {formattingPrice(item.saleCampFee)}
                </>
              ) : (
                <>{formattingPrice(item.originalCampFee)}</>
              )}
            </p>
          </div>
        </div>
      </li>
    </>
  );
}
