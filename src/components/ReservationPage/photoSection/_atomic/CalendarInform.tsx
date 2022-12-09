// NOTE :: Camp information 
/**
 * @cpt4567 작업자
*/
export default function CalendarInform() {
    return (
        <>
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
        </>
    )
}   