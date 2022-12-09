import Swiper from 'components/Common/Swiper';
import { Inform, CampInform } from './_atomic/root';

export default function TopSection() {
  return (
    <section className="ci_top_sec">
      <Swiper />

      <Inform />

      <CampInform />
    </section>
  );
}
