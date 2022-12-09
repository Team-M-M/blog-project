import Link from 'next/link';

export default function OrderCompletePage() {
  return (
    <div>
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
              <h2 className="tit">예약목록</h2>
            </div>

            <section className="res_info_sec type2">
              <div className="info_num">
                <p className="date">
                  배송예정일 : <span>2022.11.10</span>
                </p>
                <p className="number">
                  상태 : <span>주문</span>
                </p>
              </div>
              <div className="info_div type2">
                <dl>
                  <dt>주문상품</dt>
                  <dd>홍언니고기 캠핑가소Set / 53,750원 / 1개</dd>
                </dl>
                <dl>
                  <dt>결제금액</dt>
                  <dd>52,800원</dd>
                </dl>
                <dl>
                  <dt>결제방법</dt>
                  <dd>신용카드</dd>
                </dl>
                <dl>
                  <dt>배송지</dt>
                  <dd>강원 정선군 남면 광락로 349-30(낙동리)</dd>
                </dl>
                <dl>
                  <dt>주문일자</dt>
                  <dd>2022.11.07</dd>
                </dl>
              </div>
              <Link href="order/modify" passHref>
                <button type="button" className="btn_modify btn_gray">
                  배송정보수정
                </button>
              </Link>
              <button type="button" className="btn_cancle btn_gray">
                주문취소
              </button>
            </section>
            {/* 분기점 data map으로 반복 출력  */}

            <section className="bar_sort">
              <div className="info_num">
                <p className="date">
                  배송예정일 : <span>2022.11.10</span>
                </p>
                <p className="number">
                  상태 : <span>주문</span>
                </p>
              </div>
              <div className="info_div type2">
                <dl>
                  <dt>주문상품</dt>
                  <dd>홍언니고기 캠핑가소Set / 53,750원 / 1개</dd>
                </dl>
                <dl>
                  <dt>결제금액</dt>
                  <dd>52,800원</dd>
                </dl>
                <dl>
                  <dt>결제방법</dt>
                  <dd>신용카드</dd>
                </dl>
                <dl>
                  <dt>배송지</dt>
                  <dd>강원 정선군 남면 광락로 349-30(낙동리)</dd>
                </dl>
                <dl>
                  <dt>주문일자</dt>
                  <dd>2022.11.07</dd>
                </dl>
              </div>
            </section>

            <section className="bar_sort">
              <div className="info_num">
                <p className="date">
                  배송예정일 : <span>2022.11.10</span>
                </p>
                <p className="number">
                  상태 : <span>주문</span>
                </p>
              </div>
              <div className="info_div type2">
                <dl>
                  <dt>주문상품</dt>
                  <dd>홍언니고기 캠핑가소Set / 53,750원 / 1개</dd>
                </dl>
                <dl>
                  <dt>결제금액</dt>
                  <dd>52,800원</dd>
                </dl>
                <dl>
                  <dt>결제방법</dt>
                  <dd>신용카드</dd>
                </dl>
                <dl>
                  <dt>배송지</dt>
                  <dd>강원 정선군 남면 광락로 349-30(낙동리)</dd>
                </dl>
                <dl>
                  <dt>주문일자</dt>
                  <dd>2022.11.07</dd>
                </dl>
              </div>
            </section>

            <section className="bar_sort">
              <div className="info_num">
                <p className="date">
                  배송예정일 : <span>2022.11.10</span>
                </p>
                <p className="number">
                  상태 : <span>주문</span>
                </p>
              </div>
              <div className="info_div type2">
                <dl>
                  <dt>주문상품</dt>
                  <dd>홍언니고기 캠핑가소Set / 53,750원 / 1개</dd>
                </dl>
                <dl>
                  <dt>결제금액</dt>
                  <dd>52,800원</dd>
                </dl>
                <dl>
                  <dt>결제방법</dt>
                  <dd>신용카드</dd>
                </dl>
                <dl>
                  <dt>배송지</dt>
                  <dd>강원 정선군 남면 광락로 349-30(낙동리)</dd>
                </dl>
                <dl>
                  <dt>주문일자</dt>
                  <dd>2022.11.07</dd>
                </dl>
              </div>
            </section>

            <section className="bar_sort">
              <div className="paging_set">
                <button type="button" className="pg_prev">
                  이전
                </button>
                <span className="txt">2/5</span>
                <button type="button" className="pg_next">
                  다음
                </button>
              </div>
            </section>

            {/* <!--↑↑↑↑↑↑ 컨텐츠 끝 *******************↑↑↑↑↑↑↑↑↑ --> */}
          </div>
          {/* <!--// container --> */}
        </div>
        {/* <!-- //wrap_in --> */}
      </div>
      {/* <!--// wrap --> */}
    </div>
  );
}
