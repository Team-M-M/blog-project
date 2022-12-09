export default function BookingCancleComplete() {
    return (
      <div className="wrap" id="wrap">
      <div className="wrap_in">
        <div className="head">
          <div className="head_in">
            <h1>
              <span>캠핑장이름</span>
            </h1>
          </div>
        </div>

        <div className="container">
          <div className="com_title">
            <h2 className="tit">예약취소</h2>
          </div>

          <section className="res_info_sec type2">
						<div className="sec_title">
							<h3 className="tit">예약신청 정보</h3>
						</div>
						<div className="info_div type2">
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
                <dd><em>50,000원</em>
                  11.03(수) ~ 11.04(목) / 평일 : 50,000원</dd>
              </dl>
              <div className="total_div">
                <p className="tit">총 이용금액</p>
                <p className="price">50,000<span>원</span></p>
              </div>
            </div>
					</section>

          <section className="bar_sort">
            <div className="sec_title">
							<h3 className="tit">예약자 정보</h3>
						</div>
            <div className="info_div type2">
              <dl>
                <dt>예약자명</dt>
                <dd>홍길동</dd>
              </dl>
              <dl>
                <dt>휴대폰 번호</dt>
                <dd>010-1111-2222</dd>
              </dl>
              <dl>
                <dt>차량번호</dt>
                <dd>102나1233</dd>
              </dl>
              <dl>
                <dt>요청사항</dt>
                <dd>요청사항 내용이 없습니다.</dd>
              </dl>
            </div>
          </section>

          <section className="bar_sort">
            <div className="sec_title">
							<h3 className="tit">결제정보</h3>
						</div>
            <div className="info_div type2">
              <dl>
                <dt>총 결제금액</dt>
                <dd className="price">50,000<span>원</span></dd>
              </dl>
              <dl>
                <dt>결제방법</dt>
                <dd>업체계좌</dd>
              </dl>
              <dl>
                <dt>현재상태</dt>
                <dd><em>입금완료</em></dd>
              </dl>
              <dl>
                <dt>입금(결제)일</dt>
                <dd>2022.11.01 03:23:00</dd>
              </dl>
            </div>
          </section>

          <section className="bar_sort">
            <div className="sec_title">
							<h3 className="tit">취소정보</h3>
						</div>
            <div className="info_div type2">
              <dl>
                <dt>공제금액/사유</dt>
                <dd className="price">50,000<span>원</span>
                  <span className="txt">숙박요금 1일전 취소, 100%환불)<br/>
                  입금(결제)후 12시간이내 전액취소</span>
                </dd>
              </dl>
              <div className="total_div">
                <p className="tit">환불금액</p>
                <p className="price">50,000<span>원</span></p>
              </div>
              <div className="total_div type2">
                <p className="tit">환불일자</p>
                <p className="price">2022.11.01</p>
              </div>
    
              <ul className="lst_txt">
                <li>캠핑장 계좌로 입금한 경우, 해당 캠핑장에서 환불됩니다.</li>
                <li>전자결게(신용카드, 계좌이체, 가상계좌)일 경우엔 하비비커 니케이션에서 환불/취소 처리 됩니다.</li>
                <li>가상계좌(무통장입금) 100% 환불일 경우, 전자결제사(PG)수수료 280원 공제 후 환불됩니다.</li>
                <li>신용카드 취소는 영업일 3~5일 내 승인취소 됩니다. 자세한 사항은 해당 카드사로 문의해 주세요.</li>
                <li>적립금 환불은 예약취소 완료 후 재적립 됩니다</li>
              </ul>
            </div>
          </section>

          <button
            type="button"
            id="BtnAdd"
            className="link_fixdfull"
            >취소하기
          </button>

        </div>

      </div>

    </div>

    )
}
   