import { HookFormType } from 'components/FoodOrderPage/type';

export default function PaySection({ register }: HookFormType) {
  return (
    <section className="bar_sort">
      <div className="sec_title">
        <h3 className="tit">결제방법 선택</h3>
      </div>
      <div className="res_pay_area">
        <ul className="pay_list">
          <li>
            <input {...register('pay', { required: '결제방법을 선택해 주세요.' })} type="radio" name="pay" id="payMode1" value="신용카드" />
            <label htmlFor="payMode1">신용카드</label>
          </li>
          <li>
            <input {...register('pay', { required: '결제방법을 선택해 주세요.' })} type="radio" name="pay" id="payMode2" value="가상계좌" />
            <label htmlFor="payMode2">가상계좌</label>
          </li>
          <li>
            <input {...register('pay', { required: '결제방법을 선택해 주세요.' })} type="radio" name="pay" id="payMode3" value="무통장" />
            <label htmlFor="payMode3">무통장</label>
          </li>
        </ul>
      </div>
      <div id="divVBank" className="order_delivery">
        <h2 className="tp2">가상계좌입금정보</h2>
        <div className="delivery_htmlForm">
          <dl>
            <dt className="last" style={{ paddingTop: '10px' }}>
              입금은행
            </dt>
            <dd>
              <div className="selwp whf tp2" id="ref_code">
                <select {...register('VbankBankCode', { required: '은행을 선택해 주세요.' })} name="VbankBankCode" className="inp_txt">
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
                  <input {...register('ReceiptType', { required: '현금영수증을 선택해 주세요.' })} type="radio" id="ReceiptType1" name="ReceiptType" value="1" />
                  <label htmlFor="ReceiptType1">
                    <span className="ico_chk"></span>
                    <span className="iptxt"> 소득공제용</span>
                  </label>
                </div>
                <div className="receipt_type">
                  <input {...register('ReceiptType', { required: '현금영수증을 선택해 주세요.' })} type="radio" id="ReceiptType2" name="ReceiptType" value="2" />
                  <label htmlFor="ReceiptType2">
                    <span className="ico_chk"></span>
                    <span className="iptxt"> 지출증빙용</span>
                  </label>
                </div>
                <div className="receipt_type">
                  <input {...register('ReceiptType', { required: '현금영수증을 선택해 주세요.' })} type="radio" id="ReceiptType0" name="ReceiptType" value="0" />
                  <label htmlFor="ReceiptType0">
                    <span className="ico_chk"></span>
                    <span className="iptxt"> 미발행</span>
                  </label>
                </div>
              </div>
            </dd>
            <div className="ReceiptInput">
              <dt className="last"></dt>
              <dd>
                <input type="hidden" name="ReceiptTypeNo" />
                <input
                  {...register('cashPhone', { maxLength: { value: 11, message: '휴대폰번호를 제대로 입력해 주세요.' } })}
                  id="ReceiptTypeNo1"
                  className="inp_dv inp_txt"
                  type="text"
                  placeholder="휴대폰번호를 입력하여 주십시오."
                />
                <input {...register('businessNumber')} id="ReceiptTypeNo2" className="inp_dv inp_txt" type="text" placeholder="사업자번호를 입력하여 주십시오." />
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
