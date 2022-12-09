import Title from "../../Common/Title";
import { UserInfo } from "./_atomic/root";

export default function UserInfoSection() {
  return (
    <section className='bar_sort'>
      <Title name='예약자 정보' />
      <UserInfo />
    </section>
  );
}
