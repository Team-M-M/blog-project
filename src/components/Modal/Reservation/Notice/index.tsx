import { useDispatch } from 'react-redux';
import { disabledChange } from '../../../../store/modules/createSlice';

interface Props {
  onToggle: () => void;
  disabled: (boolean: boolean) => void;
}

export const Notice = ({ onToggle, disabled }: Props): JSX.Element => {
  const dispatch = useDispatch();

  return (
    <div className="pop_layer_set on" id="pop_notice">
      <div className="pop_layer">
        <div className="pop_top">
          <button type="button" className="close" onClick={onToggle}></button>
        </div>
        <div className="pop_con">
          <div className="notice_title">
            <p className="tit">공지사항</p>
          </div>

          <div className="nt_txt">
            안녕하세요? 캠핑장 입니다
            <br />
            사이트를 긴급 공사합니다.
            <br />
            <br />
            예약시 참고해 주세요!!
            <br />
            <br />
            이후 일정은 개인 메일&또는 카카오톡 오픈방 개설 이후
            <br />
            공유 하도록 하겠습니다
            <br />
            <br />
            규정에 따라 합격하지 못 하신 분들에게는 너그러운 양해 부탁드리며, 합격되신 분들은 다시 한 번 축하 드립니다.
            <br />
            감사합니다.
            <br />
          </div>
          <button className="btn_orange">자세히 보기</button>
        </div>
        <div className="pop_nt_foot">
          <div className="left_div">
            <button type="button" onClick={() => dispatch(disabledChange(true))}>
              일주일동안 보지 않기
            </button>
          </div>
          <div className="right_div">
            <button onClick={onToggle} type="button">
              닫기
            </button>
          </div>
        </div>
      </div>
      <div className="modal" style={{ display: 'block' }}></div>
    </div>
  );
};
