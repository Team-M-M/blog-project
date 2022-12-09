import Image from 'next/image';
import food_temp01 from '../../../../../public/images/food_temp01.png';
import count_minus from '../../../../../public/images/count_minus.png';
import count_plus from '../../../../../public/images/count_plus.png';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { plusAllFoodPrice, minusAllFoodPrice } from 'store/modules/foodOrder';

interface Props {
  item: {
    id: string;
    name: string;
    content: string;
    price: string;
  };
}
export default function FoodItem({ item: { name, content, price } }: Props) {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const allPrice = useSelector(
    (state: any) => state.food.price,
    (left, right) => left.price !== right.price
  );

  console.log(allPrice, '최종 가격 :::');

  return (
    <li className="fd_box">
      <div className="fd_box_item clear">
        <div className="pic">
          <Image src={food_temp01} alt="as" />
        </div>
        <div className="txt_box">
          <p className="tit">{name}</p>
          <p className="txt">{content}</p>
        </div>
        <a href="#n" className="more_a">
          상세보기
        </a>
      </div>

      <div className="count_box">
        <div className="count">
          <p className="pri">
            + <em>{`${count * Number(price.replace(',', ''))}`}</em>원
          </p>
          <button
            type="button"
            onClick={() => {
              setCount((pre) => (pre > 0 ? pre - 1 : 0));
              count && dispatch(minusAllFoodPrice(Number(price.replace(',', ''))));
            }}
            className="minus"
          >
            <Image src={count_minus} alt="minus" />
          </button>
          <span>
            <input readOnly type="number" value={count} />
          </span>
          <button
            type="button"
            onClick={() => {
              setCount((pre) => pre + 1);
              dispatch(plusAllFoodPrice(Number(price.replace(',', ''))));
            }}
            className="plus"
          >
            <Image src={count_plus} alt="plus" />
          </button>
        </div>
      </div>
    </li>
  );
}
