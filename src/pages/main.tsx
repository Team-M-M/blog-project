import Link from 'next/link';
import Image from 'next/image';
import logo_white from '../../public/images/logo_white2.png';

export default function Booking_Gate() {
  return (
    <>
      <div className="wrap" id="wrap">
        <div className="splash_set">
          <div className="splash">
            <div className="splash_in">
              <div className="top_logo">
                <Image src={logo_white} style={{ height: 'auto' }} alt={'test'} />
              </div>
              <Link href="/" passHref>
                <a className="web_link">모바일웹으로 예약하기</a>
              </Link>
              <div className="txt_box">
                <p style={{ whiteSpace: 'pre-wrap' }}>
                  지금 앱 다운받고
                  <br />
                  다양한 혜택을 경험하세요.
                </p>

                <a className="app_link" href="#!">
                  땡큐캠핑 앱으로 예약
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
