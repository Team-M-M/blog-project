import Image from 'next/image';
import ci_more_arr from '../../../../../public/images/ci_more_arr.png';
import { useToggle } from 'hooks/useToggle';
import { useEffect } from 'react';
interface Props {}

export default function Inform() {
  const [toggle, onToggle] = useToggle();

  useEffect(() => {}, []);

  const onCopyText = (address: string) => {
    if (!navigator.clipboard) {
      alert('not working clipboard');
      alert(console.log(navigator));
    }
    navigator?.clipboard
      .writeText(address)
      .then(() => alert('클립보드에 복사 되었습니다!'))
      .catch((err) => alert(`${err}`));
  };

  return (
    <div className="txt_box">
      <div className="tip_set">
        <span>2%적립</span>
        <span>전자결재</span>
        <span>실시간예약</span>
        <span>양도가능</span>
        <span>빈자리알림</span>
      </div>

      <p className="tit">공주북캠프</p>
      <ul className="info_ul">
        <li>
          <div className="tel">070-8888-3005</div>
          <a href="tel:070-8888-3005" className="tel_a">
            통화하기
          </a>
        </li>
        <li>
          <div className="addr">
            충남 공주시 신풍면 영정길 155-3
            <br />
            (영정리)
          </div>
          <button style={{ cursor: 'pointer' }} onClick={() => onCopyText('충남 공주시 신풍면 영정길 155-3 (영정리)')} className="copy_a">
            주소복사
          </button>
        </li>
        <li>
          <div className="ex_pri">170,000원</div>
          <div className="pri">110,000원 ~</div>
          <div className="like on">2,093</div>
        </li>
      </ul>

      <div className="rece_info_div">
        최근 한달
        <span>2,847명</span>방문&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span>250명</span>이 예약하셨습니다.
      </div>

      <div className="cont_div">
        <div className="cont_div_in" style={!toggle ? { height: 127 } : { height: '100%' }}>
          <ul>
            <li className="li_EA000 on">
              <span>뷰가 좋아요</span>
            </li>
            <li className="li_EA001 on">
              <span>조용해서 힐링하기 좋아요</span>
            </li>
            <li className="li_EA002 on">
              <span>사진이 잘 나와요</span>
            </li>
            <li className="li_EA003">
              <span>그늘이 많아 해를 피하기 좋아요</span>
            </li>
            <li className="li_EB000">
              <span>반려견과 함께 가기 좋아요</span>
            </li>
            <li className="li_EB001">
              <span>아이들과 함께 가기 좋아요</span>
            </li>
            <li className="li_EB002">
              <span>연인과 함께 가기 좋아요</span>
            </li>
            <li className="li_EB003">
              <span>친구들과 함께 가기 좋아요</span>
            </li>
            <li className="li_EC000">
              <span>시설이 잘 관리되어 있어요</span>
            </li>
            <li className="li_EC001">
              <span>시설물이 럭셔리해요</span>
            </li>
            <li className="li_EC002">
              <span>사이트 간격이 넓어요</span>
            </li>
            <li className="li_EC003">
              <span>놀이시설이 많아요</span>
            </li>
            <li className="li_ED000">
              <span>사장님이 친절해요</span>
            </li>
            <li className="li_ED001">
              <span>매너타임이 잘 지켜져요</span>
            </li>
          </ul>
        </div>

        <span className={`more_arr ${toggle ? 'up' : ''}`} onClick={onToggle}>
          <Image src={ci_more_arr} style={{ height: 'auto' }} alt="" />
        </span>
      </div>
    </div>
  );
}
