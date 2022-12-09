import { FieldErrorsImpl, FormState, UseFormHandleSubmit, UseFormRegister, UseFormSetValue, UseFormWatch } from 'react-hook-form';

interface HookFormType {
  register: UseFormRegister<FoodForm>;
  handleSubmit?: UseFormHandleSubmit<FoodForm>;
  formState?: FormState<FoodForm>;
  setValue?: UseFormSetValue<FoodForm>;
  watch?: UseFormWatch<FoodForm>;
}

interface FoodForm {
  date: string;
  name: string;
  phone1: number;
  phone2: number;
  phone3: number;
  password: string;
  pay: string;
  VbankBankCode: string;
  ReceiptType: string;
  cashPhone: string;
  businessNumber: string;
  agree: boolean;
  // food form
}

interface LongBeat {}

export type { HookFormType };
export type { FoodForm };
export type { LongBeat };
