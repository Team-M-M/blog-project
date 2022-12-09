// NOTE :: Camp information 
/**
 * @cpt4567 작업자
*/
export default function ReserInform() {
    return (
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

    )
}   