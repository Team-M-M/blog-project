import { useEffect, useState } from 'react';
import { text } from 'stream/consumers';

export default function Loading() {
  let loading = 'Loading...'.split('');
  const [value, setValue] = useState('');
  let pushText = '';
  let array: string[] = [];

  /**
   * typing animation용 재귀 함수
   *  @returns Loading... 순차적으로 출력 반복 fulfilled 까지 무한 반복
   */
  // useEffect(() => {
  //   setInterval(() => {
  //     loading.forEach((item) => {
  //       setValue(item)
  //       if (pushText.length === 10) {
  //       pushText = '';
  //     }
  //   }, 600);
  // }, [value]);

  // console.log(pushText, 'text');

  return (
    <div>
      <div className="typing">{pushText}</div>
      <style jsx>{`
        div {
          height: 30px;
        }
        .typing {
          text-align: right;
          display: inline-block;
          position: relative;
        }
        .typing::after {
          content: '';
          position: absolute;
          right: -1px;
          height: 100%;
          width: 1px;
          background-color: #4c566e;
        }
      `}</style>
    </div>
  );
}
