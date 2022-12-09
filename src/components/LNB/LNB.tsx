import Image from 'next/image';
import Link from 'next/link';

interface Props {
  LOGIN: boolean;
  POINT?: number;
  onToggle: () => void;
  toggle: boolean;
}

export const LNB = ({ LOGIN, POINT, onToggle, toggle }: Props): JSX.Element => {
  return (
    <div className="tot_menu">
      <div className="tot_menu_in mCscroll">
        <div className="log_box">
          <div className="pf_set">
            <div className="pic">
              <div className="gold_bat">
                <img alt="img" src="../images/gold_bat.png" />
              </div>
            </div>

            <div className="txt_box">
              {!LOGIN ? (
                <p className="tit1">
                  <Link href={'https://m.thankqcamping.com/join/login.hbb?reurl=/resv/list.hbb'} passHref>
                    로그인
                  </Link>
                  이 필요합니다.
                </p>
              ) : null}
              <p className="txt">Welcome to Q</p>
            </div>
          </div>

          <div className="point_box">
            <div className="p_div">
              <dl>
                <dt>Q-Point</dt>
                <dd>
                  <span>{`${POINT}`}</span>원
                </dd>
              </dl>
              <Link href={'https://m.thankqcamping.com/my/q_point.hbb'} passHref className="info_a">
                <img src="../images/nkkim.png" alt="info" />
              </Link>
            </div>

            <div className="p_div">
              <dl>
                <dt>활동지수</dt>
                <dd>
                  <span>{`${POINT}`}</span>점
                </dd>
              </dl>
              <Link href={'https://m.thankqcamping.com/my/act_index.hbb'} passHref className="info_a">
                <img alt="info" src="../images/nkkim.png" />
              </Link>
            </div>
          </div>
          {/* <!-- // point_box --> */}

          <button className="clo"></button>
        </div>
        {/* <!-- //log_box --> */}

        <div className="aside">
          <ul className="aside_ul">
            <li onClick={() => onToggle} className={!toggle ? 'res' : 'res on'}>
              <a href="#n">
                예약<span className="arr"></span>
              </a>
              <div className="m_div">
                <ul>
                  <li>
                    <Link href={'https://m.thankqcamping.com/resv/regionSearch.hbb?site_tp=BB000'} passHref>
                      오토캠핑
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/resv/regionSearch.hbb?site_tp=BB001'} passHref>
                      글램핑
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/resv/regionSearch.hbb?site_tp=BB002'} passHref>
                      카라반
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/resv/regionSearch.hbb?site_tp=BB003'} passHref>
                      펜션
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/rent/list.hbb'} passHref>
                      렌탈
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/resv/list.hbb?site_tp=BB006'} passHref>
                      캠프닉
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={() => onToggle} className={!toggle ? 'shop' : 'shop on'}>
              <a href="#n">
                쇼핑<span className="arr"></span>
              </a>
              <div className="m_div">
                <ul>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/index.hbb'} passHref>
                      쇼핑홈
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/event.hbb'} passHref>
                      이벤트
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/list.hbb?cate=010'} passHref>
                      캠핑용품
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/list.hbb?cate=020'} passHref>
                      먹거리
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/brand_list.hbb'} passHref>
                      브랜드
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/shop/review_list.hbb'} passHref>
                      리뷰존
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li onClick={onToggle} className={!toggle ? 'plan' : 'plan on'}>
              <a href="#n">
                기획전<span className="arr"></span>
              </a>
              <div className="m_div">
                <ul>
                  <li>
                    <Link href={'https://m.thankqcamping.com/cs/event.hbb?bbs_gb=AB008'} passHref>
                      메인기획전
                    </Link>
                  </li>
                  <li>
                    <Link href={'https://m.thankqcamping.com/cs/collect.hbb?tp=S'} passHref>
                      쇼핑기획전
                    </Link>
                  </li>
                </ul>
              </div>
            </li>
            <li className="event">
              <Link href={'https://m.thankqcamping.com/cs/event.hbb?bbs_gb=AB017'} passHref>
                이벤트
              </Link>
            </li>
            <li className="camt">
              <Link href={'https://m.thankqcamping.com/talk/list.hbb'} passHref>
                캠톡
              </Link>
            </li>
            {/* <!-- 로그인 한 경우 --> */}
            {!!LOGIN ? (
              <>
                <li className="coupon ">
                  <Link href={'#n'} passHref>
                    쿠폰
                  </Link>
                </li>
                <li className="camping_point">
                  <Link href={'#n'} passHref>
                    캠핑장 적립금
                  </Link>
                </li>
              </>
            ) : null}

            {/* <!-- // --> */}
            <li className="roul">
              <Link href={'https://m.thankqcamping.com/roulette/guide.hbb'} passHref>
                행운룰렛
              </Link>
            </li>
          </ul>
        </div>
        {/* <!-- //aside --> */}

        {/* <!-- 로그인 한 경우 --> */}
        {!LOGIN ? (
          <Link href={'#n'} passHref className="clg_btn">
            <span className="q_sp">Q-Point</span>로 <span className="fwb">행운룰렛</span> 도전하기!
          </Link>
        ) : null}

        <div className="banner_div">
          <Link href={'#n'} passHref>
            <img src="../images/banner01.png" alt="광고" />
          </Link>
        </div>

        <div className="aside type2">
          <ul className="aside_ul">
            <li className="cus on">
              <div className="m_div" style={{ display: 'block' }}>
                <ul>
                  <li>
                    <Link href="#n" passHref>
                      공지사항
                    </Link>
                  </li>
                  <li>
                    <Link href="#n" passHref>
                      자주묻는질문
                    </Link>
                  </li>
                  <li>
                    <Link href="http://about.thankqcamping.com/contact.html">제휴문의</Link>
                  </li>
                  <li>
                    <Link href="tel:02-6959-5622" id="com_tel" passHref>
                      상담원연결
                    </Link>
                  </li>
                </ul>
                <p>
                  <span>상담시간 : </span>평일 9:30~18:00 (점심시간 12:30~13:30)
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="aside_btns">
          <ul>
            {/* <!-- 로그인 한 경우 --> */}
            {!LOGIN ? (
              <>
                <li className="log">
                  <Link href="#n" passHref>
                    로그아웃
                  </Link>
                </li>
                <li className="my">
                  <Link href="#n">마이페이지</Link>
                </li>
              </>
            ) : (
              <>
                <li className="log">
                  <Link href="https://m.thankqcamping.com/join/login.hbb?reurl=%2Froulette%2Fguide%2Ehbb" passHref>
                    로그인
                  </Link>
                </li>
                <li className="my">
                  <Link href="https://m.thankqcamping.com/join/join.hbb" passHref>
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <!-- //tot_menu_in -->  */}
    </div>
  );
};
