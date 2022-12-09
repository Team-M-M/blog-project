// NOTE :: User information 
/**
 * @cpt4567 작업자
*/
export default function UserInform() {
    return (
        <section className="use_info_sec">
        <div className="com_in">
            <div className="sec_title">
                <p className="tit">이용안내</p>
            </div>

            <div className="basic_info">
                <div className="so_title">
                    <p className="tit">기본정보</p>
                </div>
                <ul>
                    <li>
                        <dl>
                            <dt>관련 사이트</dt>
                            <dd>
                                <a href="http://gongjubookcamp.co.kr">http://gongjubookcamp.co.kr</a>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>예약 안내</dt>
                            <dd>지면 방식 : 파쇄석, 데크, 잔디</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>주차 안내</dt>
                            <dd>사이트옆 주차</dd>
                        </dl>
                    </li>
                </ul>
            </div>

            <div className="dtl_info">
                <ul>
                    <li>
                        <dl>
                            <dt>운영형태</dt>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use01.png"/>
                                </div>
                                <div className="txt">오토캠핑</div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>편의시설</dt>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use02.png"/>
                                </div>
                                <div className="txt">매점</div>
                            </dd>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use03.png"/>
                                </div>
                                <div className="txt">카페</div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>이용가능</dt>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use04.png"/>
                                </div>
                                <div className="txt">산책로</div>
                            </dd>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use05.png"/>
                                </div>
                                <div className="txt">반려동물</div>
                            </dd>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use06.png"/>
                                </div>
                                <div className="txt">공용화장실</div>
                            </dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>레져</dt>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use07.png"/>
                                </div>
                                <div className="txt">등산</div>
                            </dd>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use08.png"/>
                                </div>
                                <div className="txt">수상레져</div>
                            </dd>
                            <dd>
                                <div className="pic">
                                    <img src="../images/ico_use09.png"/>
                                </div>
                                <div className="txt">MTB</div>
                            </dd>
                        </dl>
                    </li>
                </ul>

            </div>

            <div className="res_info">
                <div className="so_title">
                    <p className="tit">예약정보</p>
                </div>
                <ul>
                    <li>
                        <dl>
                            <dt>예약가능일자</dt>
                            <dd>~ 2022.03.31 (다음달로부터 2개월 까지)</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>예약오픈일</dt>
                            <dd>매월 1일 10시 오픈
                                <br/>
                                · 2022년 03월 02일 13시이후 최대 2022년 05월 31일까지 예약가능)<br/>
                                · 2022년 04월 02일 13시이후 최대 2022년 06월 30일까지 예약가능)<br/>
                                · 2022년 05월 02일 13시이후 최대 2022년 07월 31일까지 예약가능)</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>예약가능일수</dt>
                            <dd>6박7일</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>예약가능사이트수</dt>
                            <dd>최대 3개사이트</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>최성수기</dt>
                            <dd>07.22 ~ 08.15</dd>
                        </dl>
                    </li>
                    <li>
                        <dl>
                            <dt>준성수기</dt>
                            <dd>08.16 ~ 11.30, 03.01 ~ 07.21</dd>
                        </dl>
                    </li>
                </ul>
            </div>

            <div className="time_info">
                <div className="so_title">
                    <p className="tit">이용시간 안내</p>
                </div>

                <div className="time_div og">
                    <div className="tit">입퇴실시간</div>
                    <ul>
                        <li>
                            <dl>
                                <dt>입실</dt>
                                <dd>13:00</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>퇴실</dt>
                                <dd>11:00</dd>
                            </dl>
                        </li>
                    </ul>
                </div>

                <div className="time_div mt">
                    <div className="tit">매너타임</div>
                    <ul>
                        <li>
                            <dl>
                                <dt>시작</dt>
                                <dd>22:00</dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>종료</dt>
                                <dd>07:00</dd>
                            </dl>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="map_info">
                <div className="so_title">
                    <p className="tit">약도</p>
                </div>

                <div className="map" style={{height:180 ,width:"100%"}}>
                    약도api

                </div>

            </div>

            <div className="arg_info">
                <div className="so_title">
                    <p className="tit">배치도</p>
                    <button className="btn_bigview">크게보기</button>
                </div>

                <div className="pic">
                    <img src="../images/temp/arg_temp01.png"/>

                </div>

            </div>

        </div>
    </section>
    )
}