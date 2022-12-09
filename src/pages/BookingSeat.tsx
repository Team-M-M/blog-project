export default function BookingSeat() {
  return (
    <div className='wrap' id='wrap'>
      <div className='wrap_in'>
        <div className='head'>
          <div className='head_in'>
            <h1>
              <span>캠핑장이름</span>
            </h1>
          </div>
        </div>

        <div className='container'>
          <section className='ci_top_sec'>
            <div className='swiper-container ci_top_swiper'>
              <ul className='swiper-wrapper'>
                <li className='swiper-slide'>
                  <a href='#n'>
                    <img src='../images/temp/dtl_temp01.png' />
                  </a>
                  <p className='info_txt'>
                    <span>공주북캠프 글램핑 야경</span>
                  </p>
                </li>
                <li className='swiper-slide'>
                  <a href='#n'>
                    <img src='../images/temp/camp_temp01.png' />
                  </a>
                  <p className='info_txt'>
                    <span>공주북캠프 글램핑 야경</span>
                  </p>
                </li>
                <li className='swiper-slide'>
                  <a href='#n'>
                    <img src='../images/temp/camp_temp01.png' />
                  </a>
                  <p className='info_txt'>
                    <span>공주북캠프 글램핑 야경</span>
                  </p>
                </li>
              </ul>
              <div className='pagination_com swiper-pagination'></div>
            </div>
            <div className='camp_div'>
              <div className='txt_box'>
                <strong className='tit'>A사이트</strong>
                <p className='txt'>파쇄석 (6m X 11m)</p>
              </div>
              <div className='site_info'>
                <dl>
                  <dt className='day1'>주말금액</dt>
                  <dd className='day_txt'>1박 - 50,000원 / 연박 - 45,000원</dd>
                </dl>
                <dl>
                  <dt className='day2'>평일금액</dt>
                  <dd className='day_txt'>1박 - 50,000원 / 연박 - 45,000원</dd>
                </dl>
              </div>
            </div>
          </section>

          <section className='bar_sort'>
            <div className='sec_title'>
              <h3 className='tit'>이용안내</h3>
            </div>
            <div className='info_div'>
              <dl>
                <dt>특징</dt>
                <dd>파쇄석(6m X 11m)</dd>
              </dl>
              <dl>
                <dt>정보</dt>
                <dd>사이드주차, 전기사용, 자리지정예약</dd>
              </dl>
              <dl>
                <dt>최대 예약가능수</dt>
                <dd>1개</dd>
              </dl>
              <dl>
                <dt>기준인원</dt>
                <dd>총 4명(성인 2명, 만 12세 미만 소인 2명) 최대인원 : 6명</dd>
              </dl>
              <dl>
                <dt>기준차량</dt>
                <dd>총 1대</dd>
              </dl>
              <dl className='line'>
                <dt>인원초과요금</dt>
                <dd>비수기 : 성인초과 5,000원 / 소인초과 5,000원</dd>
              </dl>
              <dl>
                <dt>입/퇴실 시간</dt>
                <dd>입실시간 15:00 / 퇴실시간 11:00</dd>
              </dl>
            </div>
          </section>

          <section className='bar_sort'>
            <div className='sec_title'>
              <h3 className='tit'>예약정보</h3>
            </div>
            <div className='res_div'>
              <p className='chk_txt'>
                산택 사이트(객실) : <span>1</span>
              </p>
              <div className='date_btn'>
                <button type='button' className='inp_txt'>
                  11.03(목) ~ 11.05(토) / 2박
                </button>
                <a href='#n'>변경</a>
              </div>
              <div className='count_div'>
                <p>예약수량</p>
                <div className='count_box'>
                  <div className='count mb0'>
                    <a href='#n' className='minus'>
                      <img src='/images/count_minus.png' alt='' />
                    </a>
                    <span>
                      <input type='number' value='1' />
                    </span>
                    <a href='#n' className='plus'>
                      <img src='/images/count_plus.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='count_div'>
                <p>예약인원</p>
                <div className='count_box'>
                  <div className='count'>
                    <p>성인(만19세 이상)</p>
                    <a href='#n' className='minus'>
                      <img src='/images/count_minus.png' alt='' />
                    </a>
                    <span>
                      <input type='number' value='2' />
                    </span>
                    <a href='#n' className='plus'>
                      <img src='/images/count_plus.png' alt='' />
                    </a>
                  </div>
                  <div className='count'>
                    <p>소인(만12세 미만)</p>
                    <a href='#n' className='minus'>
                      <img src='/images/count_minus.png' alt='' />
                    </a>
                    <span>
                      <input type='number' value='1' />
                    </span>
                    <a href='#n' className='plus'>
                      <img src='/images/count_plus.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
              <div className='count_div'>
                <p>예약차량</p>
                <div className='count_box'>
                  <div className='count mb0'>
                    <a href='#n' className='minus'>
                      <img src='/images/count_minus.png' alt='' />
                    </a>
                    <span>
                      <input type='number' value='1' />
                    </span>
                    <a href='#n' className='plus'>
                      <img src='/images/count_plus.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bar_sort'>
            <div className='sec_title'>
              <h3 className='tit'>추가선택</h3>
            </div>
            <div className='add_div'>
              <div className='count_div'>
                <p className='txt'>반려견 포함(10kg미만 소형견)(x박수)</p>
                <div className='count_box'>
                  <div className='count'>
                    <p>
                      + <em>15,000</em>원
                    </p>
                    <a href='#n' className='minus'>
                      <img src='/images/count_minus.png' alt='' />
                    </a>
                    <span>
                      <input type='number' value='1' />
                    </span>
                    <a href='#n' className='plus'>
                      <img src='/images/count_plus.png' alt='' />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bar_sort'>
            <div className='sec_title'>
              <h3 className='tit'>먹거리 선택</h3>
            </div>
            <div className='food_div'>
              <ul className='lst_food'>
                <li className='fd_box'>
                  <div className='fd_box_item clear'>
                    <div className='pic'>
                      <img src='/images/temp/food_temp01.png' alt='' />
                    </div>
                    <div className='txt_box'>
                      <p className='tit'>[인기상품]국물쫄볶이</p>
                      <p className='txt'>
                        안먹어본 캠퍼는 있어도 한번만 먹어본캠퍼는 없다!
                      </p>
                    </div>
                    <a href='#n' className='more_a'>
                      상세보기
                    </a>
                  </div>
                  <div className='count_box'>
                    <div className='count'>
                      <p className='pri'>
                        + <em>9,400</em>원
                      </p>
                      <a href='#n' className='minus'>
                        <img src='/images/count_minus.png' alt='' />
                      </a>
                      <span>
                        <input type='number' value='1' />
                      </span>
                      <a href='#n' className='plus'>
                        <img src='/images/count_plus.png' alt='' />
                      </a>
                    </div>
                  </div>
                </li>
                <li className='fd_box'>
                  <div className='fd_box_item clear'>
                    <div className='pic'>
                      <img src='/images/temp/food_temp01.png' alt='' />
                    </div>
                    <div className='txt_box'>
                      <p className='tit'>[인기상품]국물쫄볶이</p>
                      <p className='txt'>
                        안먹어본 캠퍼는 있어도 한번만 먹어본캠퍼는 없다!
                      </p>
                    </div>
                    <a href='#n' className='more_a'>
                      상세보기
                    </a>
                  </div>
                  <div className='count_box'>
                    <div className='count'>
                      <p className='pri'>
                        + <em>9,400</em>원
                      </p>
                      <a href='#n' className='minus'>
                        <img src='/images/count_minus.png' alt='' />
                      </a>
                      <span>
                        <input type='number' value='1' />
                      </span>
                      <a href='#n' className='plus'>
                        <img src='/images/count_plus.png' alt='' />
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <button type='button' className='btn_more'>
                더보기
              </button>
            </div>
          </section>

          <button type='button' id='BtnAdd' className='link_fixdfull'>
            실시간 예약신청
          </button>
        </div>
      </div>
    </div>
  );
}
