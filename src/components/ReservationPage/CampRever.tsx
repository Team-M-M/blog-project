// NOTE :: Camp Reservation
 
/**
 * @cpt4567 작업자
*/
export default function CampRever() {
    return (
        <section className="site_dtl_sec">

      
        <div className="com_in">
            <div className="sec_title">
                <p className="tit">사이트 상세</p>
            </div>

            <div>
                jquery-ui 달력

            </div>



            <div className="view_date">
                <div className="slt_date">
                    <div className="gubunBox">
                        <span className="slt_gubun">입실</span>
                        <div className="gubunTxtBox">
                            <span className="slt_gubun_txt"></span>
                        </div>
                    </div>
                    <em>~</em>
                    <div className="gubunBox">
                        <span className="slt_gubun">퇴실</span>
                        <div className="selwp2">
                          {/* 
                          "chgResDays(this.value);"
                          */}
                            <select
                                id="sel_res_days"
                                name="sel_res_days"
                                onChange={()=>{}}></select>
                            <span className="slt_txt coR1">변경</span>
                        </div>
                    </div>
                </div>
                <span id="spanClock" className="crt_clock"></span>
                {/* goCalendarRefresh(); */}
                <span
                    id="spanRefresh"
                    className="crt_refresh"
                    style={{display:"none"}}
                    onClick={()=>{}}>
                      <img className="img_refresh" src="/images/ico_refresh.png" alt="새로고침"/>날짜 새로고침</span>
            </div>

            <div className="site_list" style={{maxHeight:"492px"}}>
                <ul>
                    <li>
                        <div className="site_div long_div">
                            <div className="etc_txt">
                                <p>
                                    <em>장박기간 및 안내 : </em>
                                    <span>2022.12.09~2023.03.31</span>
                                    <span className="ct">캠지기상주</span>
                                    <span>평일캠불가</span>
                                </p>
                            </div>
                            <div className="txt_box">
                                <p className="pri"><em>1개월</em>300,000원</p>
                            </div>
                            <button type="button" className="btn5 btn_lo"><span>장박신청 하기</span></button>
                        </div>
                    </li>
                </ul>

                <ul>
                    {/* <li> */}
                    <li>
                        <div className="site_div">
                            <div className="left_div">
                                <div className="pic">
                                    <img src="../images/temp/site_temp01.png" alt=""/>
                                </div>
                                <div className="txt_area">
                                    <p className="txt">예약가능
                                        <span>99</span>자리</p>
                                </div>
                            </div>
                            <div className="txt_box">
                                <p className="tit">[세미캠핑장 A] (에어컨/냉장고/더블 배드1개, 바닥 매트리스 1개)</p>
                                <ul className="dtl_site_ul ul2">

                                    <li className="camp">펜션</li>
                                    <li className="dk">데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m)</li>
                                </ul>
                                <p className="pri">45,000원</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="site_div">
                            <div className="left_div">
                                <div className="pic">
                                    <img src="../images/temp/site_temp01.png" alt=""/>
                                </div>
                                <div className="txt_area">
                                    <button className="btn_alarm">빈 자 리<br/>알림신청</button>
                                </div>
                            </div>
                            <div className="txt_box">
                                <p className="tit">[세미캠핑장 A] (에어컨/냉장고/더블 배드1개, 바닥 매트리스 1개) (에어컨/냉장고/더블 배드1개, 바닥 매트리스 1개)</p>
                                <ul className="dtl_site_ul">
                                    <li className="camp">오토캠핑</li>
                                    <li className="park">사이드주차</li>
                                    <li className="dk">데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m) 데크(8.5m X 4.2m)</li>
                                    <li className="ele">전기사용</li>
                                </ul>
                                <p className="pri">45,000원</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="site_div disabled">
                            <div className="left_div">
                                <div className="pic">
                                    <img src="../images/temp/site_temp01.png" alt=""/>
                                </div>
                                <div className="txt_area">
                                    <p className="txt">예약불가</p>
                                </div>
                            </div>
                            <div className="txt_box">
                                <p className="tit">[세미캠핑장 A] (에어컨/냉장고/더블 배드1개, 바닥 매트리스 1개)</p>
                                <ul className="dtl_site_ul">
                                    <li className="camp">오토캠핑</li>
                                    <li className="park">사이드주차</li>
                                    <li className="dk">데크(8.5m X 4.2m)</li>
                                    <li className="ele">전기사용</li>
                                </ul>
                                <p className="pri">45,000원</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="site_div disabled">
                            <div className="left_div">
                                <div className="pic">
                                    <img src="../images/temp/site_temp01.png" alt=""/>
                                </div>
                                <div className="txt_area">
                                    <p className="txt">예약완료</p>
                                </div>
                            </div>
                            <div className="txt_box">
                                <p className="tit">[세미캠핑장 A] (에어컨/냉장고/더블 배드1개, 바닥 매트리스 1개)</p>
                                <ul className="dtl_site_ul">
                                    <li className="camp">오토캠핑</li>
                                    <li className="park">사이드주차</li>
                                    <li className="dk">데크(8.5m X 4.2m)</li>
                                    <li className="ele">전기사용</li>
                                </ul>
                                <p className="pri">45,000원</p>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>

            <button className="btn_ci_more">더보기</button>

          

        </div>
    </section>
    )
}