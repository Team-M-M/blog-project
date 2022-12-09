import Link from 'next/link';

// dummy 사용, api 연결 후 수정 예정
interface Props {
  resInfos: any;
  isFirst: boolean;
}
export default function InfoItem({ resInfos, isFirst }: Props) {
  return (
    <>
      <section className={isFirst ? 'res_info_sec type2' : `bar_sort`}>
        <div className="info_num">
          <p className="date">{resInfos.date}</p>
          <p className="number">
            예약번호 : <span>{resInfos.예약번호}</span>
          </p>
        </div>
        <div className="info_div type2">
          <dl>
            <dt>신청사이트</dt>
            <dd>{resInfos.신청사이트}</dd>
          </dl>
          <dl>
            <dt>이용기간</dt>
            <dd>{resInfos.이용기간}</dd>
          </dl>
          <dl>
            <dt>이용금액</dt>
            <dd>{resInfos.이용금액}</dd>
          </dl>
          <dl>
            <dt>현재상태</dt>
            <dd>{resInfos.현재상태}</dd>
          </dl>
        </div>
        <Link href="resList/detail" passHref>
          <button type="button" className="btn_detail btn_gray">
            자세히보기
          </button>
        </Link>
      </section>
    </>
  );
}
