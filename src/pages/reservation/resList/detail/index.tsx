import MainLayout from "components/layout/Main/MainLayout";
import InfoSection from "components/ResListPage/infoSection";
import PayInfoSection from "components/ResListPage/payInfoSection";
import UserInfoSection from "components/ResListPage/userInfoSection";
export default function BookingComplete() {
  return (
    <MainLayout Isfooter={false}>
      <InfoSection />
      <UserInfoSection />
      <PayInfoSection />
    </MainLayout>
  );
}
