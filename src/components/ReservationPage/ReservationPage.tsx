import MainLayout from '../layout/Main/MainLayout';
import CampInform from './CampInform';
import CampRever from './CampRever';
import Comment from './Comment';
import Inform from './Inform';
import Swiper from './Swiper';
import UserInform from './UserInform';

export default function ReservationPage() {
  return (
    <MainLayout Isfooter={false}>
      <section className="ci_top_sec">
        <Swiper />

        <Inform />

        <CampInform />
      </section>

      <UserInform />

      <CampRever />

      <Comment />

      <section className="real_photo_sec">
        <div className="com_in">
          <div className="sec_title jc_sb">
            <p className="tit">리얼 캠장 사진</p>
            <a href="#n" className="more">
              더보기
            </a>
          </div>

          <div className="swiper-container rp_swiper">
            <ul className="swiper-wrapper">
              <li className="swiper-slide">
                <a href="#n">
                  <div className="pic">
                    <img src="../images/temp/rrv_temp01.png" alt="" />
                  </div>
                </a>
              </li>
              <li className="swiper-slide">
                <a href="#n">
                  <div className="pic">
                    <img src="../images/temp/rrv_temp02.png" alt="" />
                  </div>
                </a>
              </li>
            </ul>
          </div>

          <button className="btn_ci_photo">사진등록</button>
        </div>
      </section>
    </MainLayout>
  );
}
