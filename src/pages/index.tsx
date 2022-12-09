import Seo from "../components/layout/Header/Title";
import Link from "next/link";
import useApi from "hooks/useApi";
import { useDispatch } from "react-redux";
import { editData } from "store/modules/mainSlice";

export default function Booking_Gate() {
  const API = process.env.NEXT_PUBLIC_CAMPING_API_KEY;
  const [api, setApi] = useApi(`${API}4128?memSeq=582053`);
  console.log(api, "@api :::");
  const dispatch = useDispatch();

  return (
    <>
      <Seo disabled={true} title='캠핑은 여행이다.' />
      <div style={{ padding: 0 }} className='wrap' id='wrap'>
        <div className='splash_set'>
          <div className='splash'>
            <div className='splash_in'>
              <div className='top_logo'>
                <img src='../images/logo_white2.png' />
              </div>
              <Link
                onClick={() => {
                  dispatch(editData({ ...api }));
                }}
                href='reservation'
                passHref
              >
                <span className='web_link'>모바일웹으로 예약하기</span>
              </Link>
              <div className='txt_box'>
                <p style={{ whiteSpace: "pre-wrap" }}>
                  지금 앱 다운받고
                  <br />
                  다양한 혜택을 경험하세요.
                </p>
                <Link href='reservation' passHref>
                  <span className='app_link'>땡큐캠핑 앱으로 예약</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
