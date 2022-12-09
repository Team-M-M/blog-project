interface Props {
  name: string;
}
export default function Title({ name }: Props) {
  return (
    <div className='sec_title'>
      <h3 className='tit'>{name}</h3>
    </div>
  );
}
