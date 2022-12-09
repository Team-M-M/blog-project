import MainLayout from 'components/layout/Main/MainLayout';
import InfoInputSection from '../../../components/LongBeatPage/infoInputSection';
import TotalSection from '../../../components/LongBeatPage/totalSection';
import PaySection from '../../../components/Input/paySection';
import AgreeSection from 'components/LongBeatPage/agreeSection';
import SubmitError from 'components/Button/ErrorMessage';
import useSubmitForm from 'hooks/useForm';

export default function BookingLongResI() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    onValid,
    onInValid,
  } = useSubmitForm();

  return (
    <MainLayout Isfooter={false}>
      <form onSubmit={handleSubmit(onValid, onInValid)}>
        <InfoInputSection register={register} />
        <TotalSection />
        <PaySection register={register} />
        <AgreeSection register={register} />
        <button type="submit" id="BtnAdd" className="link_fixdfull">
          예약하기
        </button>
      </form>
    </MainLayout>
  );
}
