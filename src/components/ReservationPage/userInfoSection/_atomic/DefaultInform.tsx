export default function DefaultInform() {
    return (
        <>
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

    </>)
}