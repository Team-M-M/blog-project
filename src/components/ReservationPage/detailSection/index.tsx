import { CampInform, SubscrpInform } from './_atomic/root';

export default function DetailSection() {
  return (
    <section className="site_dtl_sec">
      <div className="com_in">
        <CampInform />

        <SubscrpInform />
      </div>
    </section>
  );
}
