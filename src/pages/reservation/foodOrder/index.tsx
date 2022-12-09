import FoodInfoSection from 'components/FoodOrderPage/foodInfoSection';
import FoodPayInfoSection from 'components/FoodOrderPage/foodPayInfoSection';
import PaySection from 'components/Input/paySection';
import PrecautionsSection from 'components/FoodOrderPage/precautionsSection';
import MainLayout from 'components/layout/Main/MainLayout';
import SubmitError from 'components/Button/ErrorMessage';
import useSubmitForm from 'hooks/useForm';

export default function BookingFoodOrder() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    onValid,
    onInValid,
  } = useSubmitForm(/* 'food' */);

  return (
    <MainLayout Isfooter={false}>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <FoodInfoSection />
        <FoodPayInfoSection register={register} />
        <PaySection register={register} />
        <PrecautionsSection register={register} />
      </form>
    </MainLayout>
  );
}
