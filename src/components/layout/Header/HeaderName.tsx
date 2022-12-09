import Image from 'next/image';
import Link from 'next/link';
import img from '../../../../public/images/logo.png';

interface Props {
  disabled: boolean;
  name?: string;
}

export function HeaderName({ disabled, name }: Props) {
  if (!disabled) {
    return (
      <div className="head">
        <div className="head_in">
          <div className="head_layout">
            <h1>
              <Link href="/reservation" passHref>
                <span>{name}</span>
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="head">
        <div className="head_in">
          <div className="head_layout">
            <h1>
              <Link href="/reservation" passHref>
                <Image src={img} alt="땡큐캡핑 로고" title="Thank Q Camping" />
                <span className="skip_text">Thank Q Camping</span>
              </Link>
            </h1>
            <Link onClick={() => {}} passHref href="#n" className="btn_menu">
              menu
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
