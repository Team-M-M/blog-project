import { HookFormType } from '../type';
import Form from 'hooks/useForm';
import React, { ReactComponentElement } from 'react';

export default function FoodPayInfoSection({ register }: HookFormType) {
  return (
    <section className="res_info_sec bar_sort">
      <div className="res_pay_area">
        <ul>
          <li>
            <label htmlFor="tel" className="tit">
              배송일자
            </label>
            <div className="tel_area">
              <input
                {...register('date', { required: '배송일자를 입력해 주세요.', maxLength: { value: 8, message: '일자는 8자로 입력하여 주시길 바랍니다.' } })}
                type="text"
                id="rec_rmk"
                name="date"
                className="inp_txt"
              />
            </div>
          </li>
          <li>
            <label htmlFor="name" className="tit">
              구매자명
            </label>
            <input
              {...register('name', { required: '이름을 입력해 주세요.', maxLength: { value: 12, message: '이름을 정확히 입력해 주세요.' } })}
              type="text"
              placeholder="홍길동"
              className="inp_txt"
              name="name"
            />
          </li>
          <li>
            <label htmlFor="tel" className="tit">
              휴대폰번호
            </label>
            <div className="tel_area">
              <input
                {...register('phone1', { required: '번호를 입력해 주세요.', validate: { phoneNum: (value) => value.toString().includes('010') || '010을 입력해 주세요.' } })}
                type="tel"
                // pattern="[0-9]{3}"
                // name="ord_h_telno1"
                id="ord_h_telno1"
                className="inp_txt"
                placeholder="010"
                aria-label="전화번호 앞 3자리"
                maxLength={3}
              />
              <span className="bar"></span>
              <input
                {...register('phone2', { required: '번호를 입력해 주세요.', minLength: { value: 4, message: '번호를 정확히 입력해 주세요' } })}
                type="tel"
                // pattern="[0-9]{4}"
                // name="ord_h_telno2"
                id="ord_h_telno2"
                className="inp_txt"
                aria-label="전화번호 중간 4자리"
                maxLength={4}
                placeholder="1234"
              />
              <span className="bar"></span>
              <input
                {...register('phone3', { required: '번호를 입력해 주세요.', minLength: { value: 4, message: '번호를 정확히 입력해 주세요' } })}
                type="tel"
                // pattern="[0-9]{4}"
                // name="ord_h_telno3"
                id="ord_h_telno3"
                className="inp_txt"
                aria-label="전화번호 끝 4자리"
                maxLength={4}
                placeholder="5678"
              />
            </div>
          </li>
          <li>
            <label htmlFor="tel" className="tit">
              비밀번호
            </label>
            <div className="tel_area">
              <input
                {...register('password', { required: '비밀번호를 입력해 주세요.', maxLength: { value: 16, message: '비밀번호를 정확히 입력해 주세요' } })}
                type="password"
                id="rec_rmk"
                // name="rec_rmk"
                placeholder="주문취소/배송정보 수정에 사용됩니다."
                className="inp_txt"
              />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}
