import useSubmitForm from 'hooks/useForm';
import Link from 'next/link';
import React, { useState } from 'react';

interface Props {
  onClick: (event: any) => void;
  type?: 'number' | 'phone';
}

export const Confirmation = ({ onClick }: Props): JSX.Element => {
  const [isDisables, setIsDisables] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    onValid,
    onInValid,
  } = useSubmitForm();

  const ConfirmationModalNumber = () => {
    return (
      <>
        <div className="pop_con on">
          <p>예약번호와 예약자명을 입력해 주세요.</p>
          <ul className="lst_pop">
            <li>
              <label htmlFor="" className="tit">
                예약번호
              </label>
              <input type="text" className="inp_txt" name="" id="" />
            </li>
            <li>
              <label htmlFor="" className="tit">
                예약자명
              </label>
              <input type="text" className="inp_txt" name="" id="" />
            </li>
          </ul>
        </div>
        <div className="pop_btn">
          <Link href="/reservation/resList" passHref>
            <button onClick={() => {}} className="btn_res" type="button">
              예약내역확인
            </button>
          </Link>
          <button
            onClick={() => {
              setIsDisables((pre) => !pre);
            }}
            className="btn_phone"
            type="button"
          >
            <em>휴대폰번호</em>로 확인하기
          </button>
        </div>
      </>
    );
  };

  const ConfirmationModalPhone = () => {
    return (
      <>
        <div className="pop_con on">
          <p>예약번호와 예약자명을 입력해 주세요.</p>
          <ul className="lst_pop">
            <li>
              <label htmlFor="" className="tit">
                예약자명
              </label>
              <input type="text" className="inp_txt" name="" id="" />
            </li>
            <li className="dp_ib">
              <label htmlFor="" className="tit">
                휴대폰번호
              </label>
              <input type="text" pattern="[0-9]*" className="inp_txt txt_phone" name="" id="" />
              <button onClick={() => {}} type="button" className="btn_cof">
                인증번호발송
              </button>
            </li>
            <li>
              <label htmlFor="" className="tit">
                인증번호
              </label>
              <input type="text" className="inp_txt" name="" id="" />
            </li>
          </ul>
        </div>
        <div className="pop_btn">
          <Link href="/reservation/resList" passHref>
            <button onClick={() => {}} className="btn_res" type="button">
              예약내역확인
            </button>
          </Link>
          <button
            onClick={() => {
              setIsDisables((pre) => !pre);
            }}
            className="btn_phone"
            type="button"
          >
            <em>예약번호</em>로 확인하기
          </button>
        </div>
      </>
    );
  };

  return (
    <div className="pop_wp">
      <div className="pop_layer_set pop_res_set on" id="pop_date_sel">
        <div className="pop_layer recent_layer">
          <div className="pop_top">
            예약 신청내역 확인
            <span
              onClick={() => {
                onClick((pre: any) => !pre);
              }}
              className="btn_close"
            ></span>
          </div>
          {!isDisables ? <ConfirmationModalNumber /> : <ConfirmationModalPhone />}
        </div>
        <div className="modal" style={{ display: 'block' }}></div>
      </div>
    </div>
  );
};
