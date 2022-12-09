import Link from 'next/link';
import Button from '../Button';

interface Props {
  long_beat: boolean;
  food: boolean;
  onClick: (event: any) => void;
}
// 스타일 컴포넌트는 안될 때가 많고, 직접 스타일에 입력하기에는 길어서 정리
const style = { display: 'flex', lineHeight: '14px', height: '100%', justifyContent: 'center', alignItems: 'center' };

export default function CampingRoute({ long_beat, food, onClick }: Props): JSX.Element {
  return (
    <div className="btm_foot">
      <div className="btn_set type3">
        <ul>
          <li>
            <button className="btn_share">
              <span></span>
            </button>
          </li>
          <li className="btn_wp">
            {!!long_beat ? (
              <button className={long_beat && food ? 'type2 small' : `type2`}>
                <Link style={style} href={`/reservation/longBeat`} passHref>
                  장박예약
                </Link>
              </button>
            ) : null}
            {!!food ? (
              <button className={long_beat && food ? 'type2 small' : `type2`}>
                <Link style={style} href={`/reservation/foodOrder`} passHref>
                  먹거리구매
                </Link>
              </button>
            ) : null}
            <Button size={100} setIsDisabled={onClick}>
              {'예약확인'}
            </Button>
          </li>
        </ul>
      </div>
      <style jsx>{`
        li.btn_wp {
          display: flex !important;
        }
      `}</style>
    </div>
  );
}
