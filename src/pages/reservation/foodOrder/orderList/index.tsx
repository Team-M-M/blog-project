import FoodListSection from 'components/FoodOrderPage/foodListSection';
import MainLayout from 'components/layout/Main/MainLayout';

export default function BookingOrderComplete() {
  return (
    <MainLayout Isfooter={false}>
      <FoodListSection />
    </MainLayout>
  );
}
