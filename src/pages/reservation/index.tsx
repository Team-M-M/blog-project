import { Notice } from 'components/Modal/Reservation/Notice';
import { useToggle } from 'hooks/useToggle';
import MainLayout from '../../components/layout/Main/MainLayout';
import DetailSection from '../../components/ReservationPage/detailSection';
import ReviewInform from '../../components/ReservationPage/reviewSection/_atomic/ReviewInform';
import TopSection from '../../components/ReservationPage/topSection';
import UserInfoSection from '../../components/ReservationPage/userInfoSection';
import useVisited from 'hooks/useVisited';
import { useSelector } from 'react-redux';
import useMoveScroll from 'hooks/useMoveScroll';

export default function ReservationPage() {
  const click = useSelector((state: any) => state.week.initialData);
  const [disabled, changeDisabled] = useVisited(click);
  const [onToggle, setToggle] = useToggle();

  // 캠핑장 유입 -> 캘린더 선택 안했을 시 -> 이동 시켜줌 //
  const { element, onMoveToElement } = useMoveScroll();

  return (
    <MainLayout Isfooter={true}>
      <TopSection />
      <UserInfoSection />
      <DetailSection />
      <ReviewInform />
      {/* 공지사항 띄우는 조건 ??  */}
      {!onToggle && !disabled ? <Notice onToggle={setToggle} disabled={changeDisabled} /> : null}
    </MainLayout>
  );
}
