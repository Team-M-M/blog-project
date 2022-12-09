import useMoveScroll from "hooks/useMoveScroll";
import { useToggle } from "hooks/useToggle";
import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import SubscrpInformItem from "./SubscrpInformItem";

interface Props {}

const siteInfosDummy = [
  {
    campSiteSeq: 14710,
    ableCnt: 4,
    originalCampFee: 50000,
    saleCampFee: 35000,
    siteImg: "/file/2022/02/04/2022020462650.36.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "A-2 ZONE",
    siteRmk: "",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "[파쇄석] ",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 14711,
    ableCnt: 0,
    originalCampFee: 50000,
    saleCampFee: 42000,
    siteImg: "/file/2022/02/04/2022020462661.36.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "A-3 ZONE",
    siteRmk: "",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "[파쇄석] ",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 14712,
    ableCnt: 6,
    originalCampFee: 60000,
    saleCampFee: 60000,
    siteImg: "/file/2022/02/04/2022020462672.29.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "B ZONE",
    siteRmk: "[5~7사이트 안전가드 없음/전망트임] [B-1 차박, 카라반 가능]",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "[6mX12m] / 대형 파쇄석 사이트",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 14713,
    ableCnt: 10,
    originalCampFee: 50000,
    saleCampFee: 40000,
    siteImg: "/file/2022/02/04/2022020462684.2.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "커플 존 (구 C1존)",
    siteRmk: "",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "[5mX7m] / 데크 사이트 ",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: true,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 14717,
    ableCnt: 0,
    originalCampFee: 50000,
    saleCampFee: 50000,
    siteImg: "/file/2022/08/18/2022081864141.2.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "D-3 ZONE",
    siteRmk: "",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "[4mX6m] / 파쇄석 사이트",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 15176,
    ableCnt: 4,
    originalCampFee: 70000,
    saleCampFee: 70000,
    siteImg: "/file/2022/04/13/2022041345105.19.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "F ZONE (노키즈)",
    siteRmk: "",
    siteTp: "BB000",
    siteTpNm: "오토캠핑",
    siteSize: "F1: 6X10 / F2,F3: 6.6X10 / F4 : 4.5x9 / 파쇄석",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 16689,
    ableCnt: 2,
    originalCampFee: 180000,
    saleCampFee: 130000,
    siteImg: "/file/2022/08/08/2022080865033.02.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "A존 글램핑",
    siteRmk:
      "터널형 텐트\r\n비치물품:캠핑테이블.의자세트.랜턴..화롯대.식기류.가스버너.그리들.커피포트.\r\n동절기; 전기담요.팬히터\r\n하절기;선풍기.캠핑용에어컨.\r\n선택사항:이불베개세트 (추가 요금 20,000원)",
    siteTp: "BB001",
    siteTpNm: "글램핑",
    siteSize:
      "비치물품:캠핑테이블.의자세트.랜턴..화롯대.식기류.가스버너.그리들.커피포트.",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
  {
    campSiteSeq: 16690,
    ableCnt: 5,
    originalCampFee: 180000,
    saleCampFee: 150000,
    siteImg: "/file/2022/08/08/2022080865109.17.jpg",
    reserveDisableByCamp: "",
    reserveDisableByCampSite: "",
    resFeeTp: "A",
    nextAbleResCnt: 0,
    siteNm: "C존 글램핑",
    siteRmk:
      "터널형 텐트\r\n비치물품:캠핑테이블.의자세트.랜턴..화롯대.식기류.가스버너.그리들.커피포트.\r\n동절기; 전기담요.팬히터\r\n하절기;선풍기.캠핑용에어컨.\r\n선택사항:이불베개세트 (20,000원)",
    siteTp: "BB001",
    siteTpNm: "글램핑",
    siteSize:
      "비치물품:캠핑테이블.의자세트.랜턴..화롯대.식기류.가스버너.그리들.커피포트.",
    twoBakDt: 0,
    twoBakAbleDt: "",
    twoBakOpenTime: 0,
    isEmpty: true,
    isTwoBak: false,
    isEmptyReg: true,
    isSitePark: false,
    isSiteElec: true,
    isTwoBak1DayPrt: true,
  },
];

const siteItems = siteInfosDummy.map((site) => (
  <SubscrpInformItem key={site.campSiteSeq} item={site} />
));
export default function SubscrpInform() {
  const [toggle, onToggle] = useToggle();
  const { element, onMoveToElement } = useMoveScroll();

  const stayDates = useSelector((state: any) => state.stayDay.stayDates);
  const [isShowSiteList, setIsShowSiteList] = useState<boolean>(false);

  useEffect(() => {
    stayDates[1] && setIsShowSiteList(true);
    !stayDates[1] && setIsShowSiteList(false);
  }, [stayDates]);
  return (
    <>
      <div
        className='site_list'
        style={
          {
            /*{ maxHeight: "492px" }*/
          }
        }
      >
        <ul>
          {/* 장박신청 하기 컴포넌트 */}
          <li>
            <div className='site_div long_div' ref={element}>
              <div className='etc_txt'>
                <p>
                  <em>장박기간 및 안내 : </em>
                  <span>2022.12.09~2023.03.31</span>
                  <span className='ct'>캠지기상주</span>
                  <span>평일캠불가</span>
                </p>
              </div>
              <div className='txt_box'>
                <p className='pri'>
                  <em>1개월</em>300,000원
                </p>
              </div>
              <button type='button' className='btn5 btn_lo'>
                <span>장박신청 하기</span>
              </button>
            </div>
          </li>
        </ul>

        {isShowSiteList && (
          <ul>{!toggle ? siteItems.slice(0, 2) : siteItems}</ul>
        )}
      </div>
      {isShowSiteList && (
        <button
          className={`btn_ci_more ${!toggle ? "" : "up"} `}
          onClick={() => {
            onToggle();
            toggle && onMoveToElement();
          }}
        >
          {!toggle ? "더보기" : "접기"}
        </button>
      )}
    </>
  );
}
