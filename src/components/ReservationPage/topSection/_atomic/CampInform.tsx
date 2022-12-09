import { useToggle } from 'hooks/useToggle';
import _ from 'lodash';

export default function CampInform() {
  const [toggle, onToggle] = useToggle();

  //   api로 받아올 데이터
  const dummy = `별도의 전기난방기구를 가져오실 필요가 없습니다. 여름엔 시원하고 겨울엔 따뜻한 공주 북캠프 입니다. 글램핑 14동,소형펜션 1동,중형펜션 3동, 대형펜션 6동과 부대시설,단체 조리시설,별도의 공용 세척실,샤워시설,화장실을 운영하고 있고 미디어 라이프에 불편함이 없도록 KT IP-TV와 무료 WIFI 망이
        구축되어 있습니다.글램핑 14동,소형펜션 1동,중형펜션 3동, 대형펜션 6동과 부대시설,단체 조리시설,별도의 공용 세척실,샤워시설,화장실을 운영하고 있고 미디어 라이프에 불편함이 없도록 KT IP-TV와 무료 WIFI 망이
        구축되어 있습니다.별도의 전기난방기구를 가져오실 필요가 없습니다. 여름엔 시원하고 겨울엔 따뜻한 공주 북캠프 입니다.글램핑 14동,소형펜션 1동,중형펜션 3동, 대형펜션 6동과 부대시설,단체 조리시설,별도의 공용 세척실,샤워시설,화장실을 운영하고 있고 미디어 라이프에 불편함이 없도록 KT IP-TV와 무료 WIFI 망이
        구축되어 있습니다.별도의 전기난방기구를 가져오실 필요가 없습니다. 여름엔 시원하고 겨울엔 따뜻한 공주 북캠프 입니다.글램핑 14동,소형펜션 1동,중형펜션 3동, 대형펜션 6동과 부대시설,단체 조리시설,별도의 공용 세척실,샤워시설,화장실을 운영하고 있고 미디어 라이프에 불편함이 없도록 KT IP-TV와 무료 WIFI 망이
        구축되어 있습니다.별도의 전기난방기구를 가져오실 필요가 없습니다. 여름엔 시원하고 겨울엔 따뜻한 공주 북캠프 입니다.글램핑 14동,소형펜션 1동,중형펜션 3동, 대형펜션 6동과 부대시설,단체 조리시설,별도의 공용 세척실,샤워시설,화장실을 운영하고 있고 미디어 라이프에 불편함이 없도록 KT IP-TV와 무료 WIFI 망이
        구축되어 있습니다.별도의 전기난방기구를 가져오실 필요가 없습니다. 여름엔 시원하고 겨울엔 따뜻한 공주 북캠프 입니다.`;

  return (
    <section className="ci_intro_sec">
      <div className="com_in">
        <div className="sec_title">
          <p className="tit">캠핑장 소개</p>
        </div>

        {/* replace all 로 |n 으로 처리할지는 차후 고민 */}
        <div className="txt" style={!toggle ? { maxHeight: 222 } : { maxHeight: '100%' }}>
          {_.map(_.split(dummy, '.'), (data, index) => (
            <div key={index}>
              {data}
              <br />
              <br />
            </div>
          ))}
        </div>

        <button className={`btn_ci_more ${!toggle ? '' : 'up'} `} onClick={onToggle}>
          {!toggle ? '더보기' : '접기'}
        </button>
      </div>
    </section>
  );
}
