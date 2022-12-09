import Title from "../../Common/Title";
import { FoodItem, Banner, TotalPrice } from "./_atomic/root";

export default function FoodInfoSection() {
  return (
    <>
      <Banner />
      <section>
        <Title name='먹거리 선택' />

        <div className='food_div type2'>
          <ul className='lst_food'>
            {dummy.map((item) => (
              <FoodItem key={item.id} item={item} />
            ))}
          </ul>
          <TotalPrice />
        </div>
      </section>
    </>
  );
}

const dummy = [
  {
    id: "f1",
    name: "[인기상품]국물 쫄볶이",
    content: "안먹어본 캠퍼는 있어도 한번만 먹어본 캠퍼는 없다!",
    price: "9,400",
  },
  {
    id: "f2",
    name: "[인기상품]국물 떡볶이",
    content: "안먹어본 캠퍼는 있다!",
    price: "9,500",
  },
  {
    id: "f3",
    name: "[인기상품]국물 쫄쫄이",
    content: "안먹어본 캠퍼는 있어도 한번만 먹어본 캠퍼는 없다!",
    price: "9,600",
  },
];
