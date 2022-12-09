interface Props {

}

export default function TimeInform() {
    return (
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
    )
}