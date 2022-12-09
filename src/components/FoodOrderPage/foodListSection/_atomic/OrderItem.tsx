import { useToggle } from "hooks/useToggle";
import Link from "next/link";

// dummy 사용, api 연결 후 수정 예정
interface Props {
  resInfos: any;
  isFirst: boolean;
}
export default function OrderItem({ resInfos, isFirst }: Props) {
  const [toggle, onToggle] = useToggle();

  return (
    <>
      <section
        className={isFirst ? "res_info_sec type2" : `bar_sort`}
        onClick={onToggle}
      >
        <div className='info_num'>
          <p className='date'>
            배송예정일 : <span>{resInfos.배송예정일}</span>
          </p>
          <p className='number'>
            상태 : <span>{resInfos.상태}</span>
          </p>
        </div>
        <div className='info_div type2'>
          <dl>
            <dt>주문상품</dt>
            <dd>{resInfos.주문상품}</dd>
          </dl>
          <dl>
            <dt>결제금액</dt>
            <dd>{resInfos.결제금액}</dd>
          </dl>
          <dl>
            <dt>결제방법</dt>
            <dd>{resInfos.결제방법}</dd>
          </dl>
          <dl>
            <dt>배송지</dt>
            <dd>{resInfos.배송지}</dd>
          </dl>
          <dl>
            <dt>주문일자</dt>
            <dd>{resInfos.주문일자}</dd>
          </dl>
        </div>
      </section>
      {toggle && (
        <>
          <button type='button' className='btn_modify btn_gray'>
            배송정보수정
          </button>
          <button type='button' className='btn_cancle btn_gray'>
            주문취소
          </button>
        </>
      )}
    </>
  );
}
