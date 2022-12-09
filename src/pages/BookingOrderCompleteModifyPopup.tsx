export default function BookingOrderCompleteModifyPopup() {
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
            <h2 className="tit">예약목록</h2>
          </div>

          <section className="res_info_sec type2">
						<div className="info_num">
							<p className="date">배송예정일 : <span>2022.11.10</span></p>
							<p className="number">상태 : <span>주문</span></p>
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
            <button type="button" className="btn_modify btn_gray">배송정보수정</button>
            <button type="button" className="btn_cancle btn_gray">주문취소</button>
					</section>

          <section className="bar_sort">
						<div className="info_num">
							<p className="date">배송예정일 : <span>2022.11.10</span></p>
							<p className="number">상태 : <span>주문</span></p>
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
							<p className="date">배송예정일 : <span>2022.11.10</span></p>
							<p className="number">상태 : <span>주문</span></p>
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
							<p className="date">배송예정일 : <span>2022.11.10</span></p>
							<p className="number">상태 : <span>주문</span></p>
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
              <button type="button" className="pg_prev">이전</button>
              <span className="txt">2/5</span>
              <button type="button" className="pg_next">다음</button>
            </div>
          </section>

        </div>

        <div className="pop_wp">
          <div className="pop_layer_set pop_res_set on" id="pop_date_sel">
              <div className="pop_layer recent_layer">
                <div className="pop_top">
                  배송정보수정
                  <span className="btn_close"></span>
                </div>
                <div className="pop_con on">
                  <p>변경하실 정보를 수정해 주세요.</p>
                  <ul className="lst_pop type2">
                    <li>
                      <label htmlFor="" className="tit">수령인</label>
                      <input type="text" className="inp_txt" name="" id=""/>
                    </li>
                    <li>
                      <label htmlFor="" className="tit">휴대폰번호</label>
                      <input type="text" className="inp_txt" name="" id=""/>
                    </li>
                    <li className="dp_ib">
                      <label htmlFor="" className="tit">배송지</label>
                      <input type="text" className="inp_txt" name="" id=""/>
                      <button type="button" className="btn_cof">우편번호검색</button>
                      <input type="text" className="inp_txt type2" name="" id=""/>
                      <input type="text" className="inp_txt type2" name="" id=""/>
                    </li>
                    <li>
                      <label htmlFor="" className="tit">배송일자</label>
                      <input type="text" className="inp_txt" name="" id=""/>
                    </li>
                  </ul>
                </div>
                <div className="pop_btn type2">
                  <button className="btn_res" type="button">수정완료</button>
                </div>
            </div>
            <div className="modal" style={{display:"block"}}></div>
          </div>
        </div>

      </div>

    </div>
 
    )
}
   