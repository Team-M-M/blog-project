import { HookFormType } from 'components/FoodOrderPage/type';

export default function InfoInputSection({ register }: HookFormType) {
  return (
    <>
      <div className="com_title">
        <h2 className="tit">장박신청하기</h2>
      </div>

      <section className="res_info_sec">
        <div className="res_pay_area">
          <ul>
            <li>
              <label htmlFor="name" className="tit">
                예약자명
              </label>
              <input type="text" placeholder="홍길동" value="" className="inp_txt" />
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
            <li className="info_div type2">
              <dl>
                <dt>장박이용기간</dt>
                <dd>2022.12.01 ~ 2023.02.28</dd>
              </dl>
              <dl>
                <dt>장박정보</dt>
                <dd>캠지기 상주 / 평일캠 가능</dd>
              </dl>
              <dl>
                <dt>장박혜택</dt>
                <dd>
                  캠핑장 15분 거리에 비발디파크가 있어서 겨울철 아이들과 스키, 눈썰매를 이용하실 수 있습니다.
                  <br />
                  <br />
                  환불은 불가합니다.
                </dd>
              </dl>
            </li>
            <li>
              <label htmlFor="date" className="tit">
                신청기간
              </label>
              <ul className="lst_check_period">
                <li>
                  <input type="radio" id="period_num1" name="period_num" />
                  <label htmlFor="period_num1">1개월</label>
                </li>
                <li>
                  <input type="radio" id="period_num2" name="period_num" />
                  <label htmlFor="period_num2">2개월</label>
                </li>
                <li>
                  <input type="radio" id="period_num3" name="period_num" />
                  <label htmlFor="period_num3">3개월</label>
                </li>
              </ul>
            </li>
            <li>
              <label htmlFor="day" className="tit">
                신청일자
              </label>
              <div className="date_div">
                <input type="text" className="inp_txt date_prev" value="2022.12.01" />
                <span>-</span>
                <input type="text" className="inp_txt" />
              </div>
            </li>
            <li>
              <label className="tit">신청사이트</label>
              <ul className="lst_check_site">
                <li>
                  <input type="radio" id="site_num1" name="site_num" />
                  <label htmlFor="site_num1">
                    <span className="ico_chk"></span>
                    <span className="iptxt">1</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num2" name="site_num" />
                  <label htmlFor="site_num2">
                    <span className="ico_chk"></span>
                    <span className="iptxt">2</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num3" name="site_num" />
                  <label htmlFor="site_num3">
                    <span className="ico_chk"></span>
                    <span className="iptxt">3</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num4" name="site_num" />
                  <label htmlFor="site_num4">
                    <span className="ico_chk"></span>
                    <span className="iptxt">4</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num5" name="site_num" />
                  <label htmlFor="site_num5">
                    <span className="ico_chk"></span>
                    <span className="iptxt">5</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num6" name="site_num" />
                  <label htmlFor="site_num6">
                    <span className="ico_chk"></span>
                    <span className="iptxt">6</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num7" name="site_num" />
                  <label htmlFor="site_num7">
                    <span className="ico_chk"></span>
                    <span className="iptxt">7</span>
                  </label>
                </li>
                <li>
                  <input type="radio" id="site_num8" name="site_num" />
                  <label htmlFor="site_num8">
                    <span className="ico_chk"></span>
                    <span className="iptxt">8</span>
                  </label>
                </li>
              </ul>
            </li>
            <li>
              <label htmlFor="tel" className="tit">
                요청사항
              </label>
              <div className="tel_area">
                <input type="text" id="rec_rmk" name="rec_rmk" placeholder="내용을 입력해 주세요." className="inp_txt" />
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
