interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

export default function SubmitBtn({ onClick, children, ...props }: Props): JSX.Element {
  return (
    <>
      <button onClick={() => onClick()} className="link_fixdfull" id="BtnAdd" type="submit">
        {children}
      </button>
    </>
  );
}
