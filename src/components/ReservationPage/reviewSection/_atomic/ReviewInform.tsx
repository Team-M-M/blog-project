interface Props {

}
// NOTE :: information 
/**
 * @cpt4567 작업자
*/
export default function ReviewInform() {
    return (
        <div className="com_in">
        <div className="sec_title jc_sb">
            <p className="tit">리얼후기</p>
            <a href="#n" className="more">더보기</a>
        </div>

        <div className="rrv_list">
            <ul>
                <li>
                    <div className="rrv_div">
                        <div className="pic_div">
                            <div className="pic">
                                <img src="../images/temp/img_temp02.png" alt=""/>
                            </div>
                            <div className="score">5.0</div>
                        </div>
                        <div className="txt_box">
                            <div className="top_div">
                                <p className="na">목동69</p>
                                <p className="date">2021-12-29</p>
                            </div>
                            <div className="txt">
                                [방문후기] 영하18도 너무 추웠지만 크리스마스 자연 속에서 잘 보내고 왔어요 ~^^
                                <img src="../images/temp/rrv_temp01.png" alt=""/>
                            </div>

                        </div>
                    </div>
                </li>
                <li>
                    <div className="rrv_div">
                        <div className="pic_div">
                            <div className="pic">
                                <img src="../images/temp/img_temp02.png" alt=""/>
                            </div>
                            <div className="score">5.0</div>
                        </div>
                        <div className="txt_box">
                            <div className="top_div">
                                <p className="na">목동69</p>
                                <p className="date">2021-12-29</p>
                            </div>
                            <div className="txt">
                                [방문후기] 영하18도 너무 추웠지만 크리스마스 자연 속에서 잘 보내고 왔어요 ~^^
                            </div>

                        </div>
                    </div>
                </li>
                <li>
                    <div className="rrv_div">
                        <div className="pic_div">
                            <div className="pic"></div>
                            <div className="score">4.0</div>
                        </div>
                        <div className="txt_box">
                            <div className="top_div">
                                <p className="na">캠캠퍼</p>
                                <p className="date">2021-12-29</p>
                            </div>
                            <div className="txt">
                                [방문후기] 영하18도 너무 추웠지만 크리스마스 자연 속에서 잘 보내고 왔어요 ~^^
                            </div>

                        </div>
                    </div>
                </li>
            </ul>
        </div>

        <button className="btn_ci_write">한줄평 등록</button>
    </div>
    )
}