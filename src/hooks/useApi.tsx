import axios from 'axios';
import { useEffect, useState } from 'react';

/**
 * api 호출 로직을 custom hook으로 만든 함수
 * @param URL api.ts 파일에서 받은 url 정보
 * @returns url을 로직에 담아서 호출한 값을 state에 담아서 return
 */
export default function useApi(URL: string) {
  const [api, setApi] = useState<any>([]);

  useEffect(() => {
    (async () => {
      await axios
        .get(URL)
        .then((res) => {
          console.log(res.data.data, '@@res :::');
          setApi(res.data.data);
        })
        .catch((err) => console.log(err, '@@error'));
    })();
  }, []);

  return [api, setApi];
}
