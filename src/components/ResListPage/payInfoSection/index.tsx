import Title from '../../Common/Title';
import PayInfo from './_atomic/PayInfo';
import Link from 'next/link';

export default function PayInfoSection() {
  return (
    <section className="bar_sort">
      <Title name="결제정보" />
      <PayInfo />
      <Link href="./" passHref>
        <button type="button" id="BtnAdd" className="link_fixdfull">
          예약목록
        </button>
      </Link>
    </section>
  );
}
