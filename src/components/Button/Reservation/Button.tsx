import Link from 'next/link';
import styled from 'styled-components';

// 아직 사용하지 않고 있다 -> 초기 렌더링시 못 읽는 경우가 있다.
const StyledLink = styled.a`
  display: inline-block;
  width: 100%;
  height: inherit;
  vertical-align: middle;
`;

interface Props {
  children: React.ReactNode;
  url?: string;
  size?: number;
  setIsDisabled: (event: any) => void;
}

/**
 * 기본 버튼 레이아웃
 * @param children 버튼안에 유동적으로 바뀔 text
 * @param {string} url 버튼을 눌렀을 때 이동할 url 정보
 * @returns Button UI
 */
export default function Button({ children, url, size, setIsDisabled }: Props) {
  return (
    <button className="btn_res" onClick={() => setIsDisabled((pre: any) => !pre)}>
      <Link
        style={{ display: 'flex', lineHeight: '14px', height: '100%', justifyContent: 'center', alignItems: 'center' }}
        href={!!url ? { pathname: `/reservation/${url}`, query: 'test' } : ''}
        passHref
      >
        {children}
      </Link>
      <style jsx>{`
        .btn_res {
          display: block;
          min-width: 72px;
          height: 75px;
          color: #fff;
          font-size: 14px;
        }
      `}</style>
    </button>
  );
}
