import { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm, appendErrors } from 'react-hook-form';
import { FoodForm } from '../components/FoodOrderPage/type';

const useSubmitForm = () => {
  const [submitData, setSubmitData] = useState<object>({});

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FoodForm>();

  const onValid: SubmitHandler<FoodForm> = (data) => setSubmitData((pre) => data);
  const onInValid: SubmitErrorHandler<FoodForm> = (data) => setSubmitData((pre) => data);

  return { register, handleSubmit, formState: { errors }, setValue, watch, onValid, onInValid };
};

export default useSubmitForm;
