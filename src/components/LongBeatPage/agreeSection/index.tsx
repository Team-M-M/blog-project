import { HookFormType } from 'components/FoodOrderPage/type';
import { useCallback, useState } from 'react';

export default function AgreeSection({ register }: HookFormType) {
  const [checkedList, setCheckedLists] = useState<Array<any>>([]);

  const onCheckedAll = () => {
    const checkedListArray: Array<any> = [];
    checkLists.forEach((list) => checkedListArray.push(list));
    setCheckedLists(checkedListArray);
  };

  const onCheckedElement = useCallback(
    (checked: boolean, list: any) => {
      if (checked) {
        setCheckedLists([...checkedList, list]);
      } else {
        setCheckedLists(checkedList.filter((el) => el !== list));
      }
    },
    [checkedList]
  );

  return (
    <>
      <section className="bar_sort">
        <div className="sec_title jc_sb">
          <h3 className="tit">약관동의</h3>
          <button type="button" onClick={onCheckedAll}>
            전체동의
          </button>
        </div>
        <div className="res_pay_area">
          <div className="agree_box">
            <ul className="clear">
              {checkLists.map((list) => (
                <li key={list.id}>
                  <input
                    {...register('agree', { required: '동의를 눌러주세요.' })}
                    type="checkbox"
                    id={list.id}
                    onChange={(e) => onCheckedElement(e.target.checked, list)}
                    checked={checkedList.includes(list) ? true : false}
                  />
                  <label htmlFor={list.id}>
                    {list.content}
                    <span>(필수)</span>
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}

const checkLists = [
  { id: 'd1', content: '개인정보 수집 및 이용 동의' },
  { id: 'd2', content: '개인정보 제3자 제동 동의' },
];
