import { InfoItem } from "./_atomic/root";
import usePagination from "./../../../hooks/usePagination";

const ITEM_LIMIT = 3;

export default function ListSection() {
  const { offset, getPaginationTsx } = usePagination(dummy.length, ITEM_LIMIT);

  return (
    <>
      <div className='com_title'>
        <h2 className='tit'>예약목록</h2>
      </div>

      {dummy.slice(offset, offset + ITEM_LIMIT).map((item, idx) => (
        <InfoItem
          key={item.id}
          resInfos={item}
          isFirst={idx % ITEM_LIMIT === 0}
        />
      ))}
      {getPaginationTsx()}
    </>
  );
}

// pagination 구현을 위해 dummy 생성
const dummy = [
  {
    id: "d1",
    date: "2022.11.01",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d2",
    date: "2022.11.02",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d3",
    date: "2022.11.03",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d4",
    date: "2022.11.04",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d5",
    date: "2022.11.05",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d6",
    date: "2022.11.06",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
  {
    id: "d7",
    date: "2022.11.07",
    예약번호: "5032115",
    신청사이트: "A사이트 / 사이트번호 : 3 / 1개",
    이용기간: "1박 2일",
    이용금액: "50,000원",
    현재상태: "입금대기",
  },
];
