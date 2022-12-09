export default function ResInfoPage() {
  // Test
  return (
    <>
      <div className="wrap" id="wrap">
        <div className="wrap_in">
          <div className="head">
            <div className="head_in">
              <h1>
                <span>캠핑장이름</span>
              </h1>
            </div>
          </div>
          {/* <!--// head --> */}

          <div className="container">
            {/* <!--↓↓↓↓↓↓ 컨텐츠 시작 ↓↓↓↓↓↓--> */}
            <div className="com_title">
              <h2 className="tit">예약정보 입력</h2>
            </div>
            <section className="res_info_sec">
              <div className="res_pay_area">
                <ul>
                  <li>
                    <label htmlFor="name" className="tit">
                      예약자명
                    </label>
                    <input type="text" placeholder="홍길동" value="" className="inp_txt"></input>
                  </li>
                  <li>
                    <label htmlFor="tel" className="tit">
                      연락처<span> (필수)</span>
                    </label>
                    <div className="tel_area">
                      <input type="tel" pattern="[0-9]*" name="ord_h_telno1" id="ord_h_telno1" className="inp_txt" placeholder="010" aria-label="전화번호 앞 4자리" maxLength={4} value="" />
                      <span className="bar"></span>
                      <input type="tel" pattern="[0-9]*" name="ord_h_telno2" id="ord_h_telno2" className="inp_txt" placeholder="1234" aria-label="전화번호 중간 4자리" maxLength={4} value="" />
                      <span className="bar"></span>
                      <input type="tel" pattern="[0-9]*" name="ord_h_telno3" id="ord_h_telno3" className="inp_txt" placeholder="5678" aria-label="전화번호 끝 4자리" maxLength={4} value="" />
                    </div>
                  </li>
                  <li>
                    <label htmlFor="tel" className="tit">
                      차량번호
                    </label>
                    <div className="tel_area">
                      <input type="text" id="rec_rmk" name="rec_rmk" placeholder="차량번호를 입력해 주세요." className="inp_txt"></input>
                    </div>
                  </li>
                  <li>
                    <label htmlFor="tel" className="tit">
                      요창사항
                    </label>
                    <div className="tel_area">
                      <input type="text" id="rec_rmk" name="rec_rmk" placeholder="내용을 입력해 주세요." className="inp_txt"></input>
                    </div>
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- //예약정보 --> */}

            <section className="bar_sort">
              <div className="sec_title">
                <h3 className="tit">쿠폰/적립금 사용</h3>
              </div>
              <div className="res_pay_area">
                <div className="save_div">
                  <p>
                    사용 가능 적립금 : <span className="">100,000</span>원
                  </p>
                  <div className="code_num">
                    <input type="text" pattern="[0-9]*" placeholder="인증번호를 입력해 주세요." className="inp_txt"></input>
                    <button type="button" className="btn_cof">
                      인증번호 발송
                    </button>
                  </div>
                </div>
                <ul className="lst_txt">
                  <li>적립금 사용은 휴대폰 인증을 받으셔야 합니다.</li>
                  <li>
                    적립금은{' '}
                    <span>
                      <em>1,000</em>원
                    </span>{' '}
                    단위로 사용이 가능합니다.
                  </li>
                  <li>
                    해당 캠핑장은 적립금{' '}
                    <span>
                      <em>1,000</em>원
                    </span>{' '}
                    이상부터 사용하실 수 있습니다.
                  </li>
                  <li>
                    땡큐캠핑 적립금은 최대{' '}
                    <span>
                      <em>50,000</em>원
                    </span>
                    까지 사용이 가능합니다.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- //쿠폰/적립금사용 --> */}

            <section className="bar_sort">
              <div className="sec_title">
                <h3 className="tit">
                  결제금액<span className="txt">(부가세포함)</span>
                </h3>
              </div>
              <div className="info_div">
                <div className="point_div">
                  <p className="tit">땡큐적립금</p>
                  <p className="price">
                    2,000<span>원</span>
                  </p>
                </div>
                <div className="total_div">
                  <p className="tit">총 결제금액</p>
                  <p className="price">
                    50,000<span>원</span>
                  </p>
                </div>
                <ul className="lst_txt type2">
                  <li>
                    <span>2022.11.18 23:59:59</span>까지 결제(입금)되지 않으면자동으로 예약취소 됩니다
                  </li>
                  <li>
                    땡큐캠핑 적립금은 <span>숙박요금의 4%</span>, 적립은 예약일 다음날 자동 적립됩니다.
                  </li>
                </ul>
              </div>
            </section>
            {/* <!-- //결제금액 --> */}

            <section className="bar_sort">
              <div className="sec_title">
                <h3 className="tit">결제방법 선택</h3>
              </div>
              <div className="res_pay_area">
                <ul className="pay_list">
                  <li>
                    <input type="radio" name="pay" id="payMode1"></input>
                    <label htmlFor="payMode1">신용카드</label>
                  </li>
                  <li>
                    <input type="radio" name="pay" id="payMode2"></input>
                    <label htmlFor="payMode2">가상계좌</label>
                  </li>
                  <li>
                    <input type="radio" name="pay" id="payMode3"></input>
                    <label htmlFor="payMode3">무통장</label>
                  </li>
                </ul>
              </div>
              <div id="divVBank" className="order_delivery">
                <h2 className="tp2">가상계좌입금정보</h2>
                <div className="delivery_form">
                  <dl>
                    <dt className="last" style={{ paddingTop: '10px' }}>
                      입금은행
                    </dt>
                    <dd>
                      <div className="selwp whf tp2" id="ref_code">
                        <select name="VbankBankCode" className="inp_txt">
                          <option value="003">기업은행 (00:30~23:30)</option>
                          <option value="004">국민은행 (00:30~23:30)</option>
                          <option value="005">외한은행 (01:00~22:45)</option>
                          <option value="011">농협중앙회 (00:30~23:30)</option>
                          <option value="020">우리은행 (00:30~23:30)</option>
                          <option value="081">하나은행 (00:30~23:30)</option>
                          <option value="088">신한은행 (00:30~23:30)</option>
                          <option value="031">대구은행 (08:00~23:00)</option>
                          <option value="032">부산은행 (00:30~23:30)</option>
                        </select>
                        <i className="fa fa-angle-down slt_arw" aria-hidden="true"></i>
                      </div>
                    </dd>
                    <dt className="last" style={{ paddingTop: '10px' }}>
                      현금영수증
                    </dt>
                    <dd>
                      <div className="receipt_div clear">
                        <div className="receipt_type" style={{ float: 'left' }}>
                          <input type="radio" id="ReceiptType1" name="ReceiptType" value="1"></input>
                          <label htmlFor="ReceiptType1">
                            <span className="ico_chk"></span>
                            <span className="iptxt">소득공제용</span>
                          </label>
                        </div>
                        <div className="receipt_type">
                          <input type="radio" id="ReceiptType2" name="ReceiptType" value="2"></input>
                          <label htmlFor="ReceiptType2">
                            <span className="ico_chk"></span>
                            <span className="iptxt">지출증빙용</span>
                          </label>
                        </div>
                        <div className="receipt_type">
                          <input type="radio" id="ReceiptType0" name="ReceiptType" value="0"></input>1
                          <label htmlFor="ReceiptType0">
                            <span className="ico_chk"></span>
                            <span className="iptxt">미발행</span>
                          </label>
                        </div>
                      </div>
                    </dd>
                    <div className="ReceiptInput">
                      <dt className="last"></dt>
                      <dd>
                        <input type="hidden" name="ReceiptTypeNo"></input>
                        <input id="ReceiptTypeNo1" className="inp_dv inp_txt" type="text" placeholder="휴대폰번호를 입력하여 주십시오."></input>
                        <input id="ReceiptTypeNo2" className="inp_dv inp_txt" type="text" placeholder="사업자번호를 입력하여 주십시오."></input>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </section>
            {/* <!-- //결제방법 --> */}

            <section className="bar_sort">
              <div className="sec_title jc_sb">
                <h3 className="tit">약관동의</h3>
                <button type="button">전체동의</button>
              </div>
              <div className="res_pay_area">
                <div className="agree_box">
                  <ul className="clear">
                    <li>
                      <input type="checkbox" id="agr1"></input>
                      <label htmlFor="agr1">
                        예약 유의사항 및 취소/환불규정 동의<span>(필수)</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="agr2"></input>
                      <label htmlFor="agr2">
                        개인정보 수집 및 이용 동의<span>(필수)</span>
                      </label>
                    </li>
                    <li>
                      <input type="checkbox" id="agr3"></input>
                      <label htmlFor="agr3">
                        개인정보 제3자 제동 동의<span>(필수)</span>
                      </label>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            {/* <!-- //약관동의 --> */}

            <section className="bar_sort">
              <div className="sec_title">
                <h3 className="tit">예약내역</h3>
              </div>
              <div className="info_div type2">
                <dl>
                  <dt>사이트(객실)</dt>
                  <dd>한가족_01</dd>
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
                <div className="total_div">
                  <p className="tit">총 이용금액</p>
                  <p className="price">
                    50,000<span>원</span>
                  </p>
                </div>
              </div>
            </section>
            {/* <!-- //예약 내역 --> */}

            <button
              type="button"
              id="BtnAdd"
              className="link_fixdfull"
              /* onclick="SavResLongAdd();" */
            >
              예약하기
            </button>

            {/* <!--↑↑↑↑↑↑ 컨텐츠 끝 *******************↑↑↑↑↑↑↑↑↑ --> */}
          </div>
          {/* <!--// container --> */}
        </div>
        {/* <!-- //wrap_in --> */}
      </div>
      {/* <!--// wrap --> */}
    </>
  );
}
