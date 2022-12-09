import { useToggle } from 'hooks/useToggle';
import Link from 'next/link';
import { HookFormType } from '../type';

export default function PrecautionsSection({ register }: HookFormType) {
  const [toggle, onToggle] = useToggle();

  return (
    <>
      <section className="bar_sort">
        <div className="sec_title jc_sb">
          <h3 className="tit">주의사항</h3>
        </div>
        <div className="res_pay_area">
          <div className="agree_box">
            <ul className="clear">
              <li>
                <input {...register('agree', { required: '주의사항 동의를 눌러주세요.' })} type="checkbox" name="agree" defaultChecked={false} id="agr1" onClick={onToggle} />
                <label htmlFor="agr1">주의사항 동의</label>
              </li>
            </ul>
          </div>
          <ul className="lst_txt">
            <li>배송 후에는 취소/환불이 되지 않습니다.</li>
            <li>우체국 택배로 배송되며, 배송도착은 선택하신 배송일자 오후 3시 입니다.(도착시간은 상황에 따라 달라질 수 있습니다.)</li>
          </ul>
        </div>
      </section>

      {/* <Link
        href={!!toggle ? `foodOrder/orderList` : ''}
        passHref
        onClick={() => {
          !!toggle ? null : alert('동의를 눌러주세요');
        }}
      > */}
      <button type="submit" id="BtnAdd" className="link_fixdfull">
        먹거리 구매하기
      </button>
      {/* </Link> */}
    </>
  );
}
