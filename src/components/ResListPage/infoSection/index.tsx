import Title from "../../Common/Title";
import { InfoDiv } from "./_atomic/root";

export default function InfoSection() {
  return (
    <>
      <div className='com_title'>
        <h2 className='tit'>예약내역</h2>
      </div>

      <section className='res_info_sec type2'>
        <Title name='예약신청 정보' />
        <InfoDiv />
      </section>
    </>
  );
}
