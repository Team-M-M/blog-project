export default function TotalSection() {
  return (
    <section className='bar_sort'>
      <div className='sec_title'>
        <h3 className='tit'>
          결제금액<span className='txt'>(부가세포함)</span>
        </h3>
      </div>
      <div className='info_div'>
        <div className='total_div type2'>
          <p className='tit'>총 결제금액</p>
          <p className='price'>
            50,000<span>원</span>
          </p>
        </div>
        <ul className='lst_txt type2'>
          <li>
            <span>2022.11.18 23:59:59</span>까지 결제(입금)되지 않으면자동으로
            예약취소 됩니다
          </li>
        </ul>
      </div>
    </section>
  );
}
