import Image from 'next/image';
import as from '../../../public/images/dtl_temp01.png';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

/* import Swiper from 'react-id-swiper'; */
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';

interface Props {}

export default function SwiperComponent() {
  
  SwiperCore.use([Pagination]);

  return (
    <div className="swiper-container ci_top_swiper">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        centeredSlides={true}
        lazy={{ loadingClass: '' }}
        observer={true}
        observeParents={true}
        loop={true}
        pagination={{
          el: '.pagination_com',
          clickable: true,
          type: 'bullets',
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
        }}
      >
        <SwiperSlide>
          <Link href="/" passHref>
            <Image src={as} alt="이미지" />
          </Link>
          <p className="info_txt">
            <span>공주북캠프 11111 야경</span>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/" passHref>
            <Image src={as} alt="이미지" />
          </Link>
          <p className="info_txt">
            <span>공주북캠프 11111 야경</span>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/" passHref>
            <Image src={as} alt="이미지" />
          </Link>
          <p className="info_txt">
            <span>공주북캠프 11111 야경</span>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/" passHref>
            <Image src={as} alt="이미지" />
          </Link>
          <p className="info_txt">
            <span>공주북캠프 11111 야경</span>
          </p>
        </SwiperSlide>

        <SwiperSlide>
          <Link href="/" passHref>
            <Image src={as} alt="이미지" />
          </Link>
          <p className="info_txt">
            <span>공주북캠프 11111 야경</span>
          </p>
        </SwiperSlide>
        <div className="pagination_com swiper-pagination"></div>
      </Swiper>
    </div>
  );
}
