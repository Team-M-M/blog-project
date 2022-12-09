import { ErrorMessage } from '@hookform/error-message';

interface Props {
  errors?: any;
  name: string;
}

const SubmitError = ({ errors, name }: Props) => {
  return (
    <>
      <ErrorMessage errors={errors} name={name} render={({ message }) => <p>{`${errors.name.message}`}</p>} />
      <style jsx>
        {`
          p {
            padding-left: 24px;
            color: #f27226;
          }
        `}
      </style>
    </>
  );
};

export default SubmitError;
