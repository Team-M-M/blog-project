import { LNB } from "components/LNB/LNB";
import useApi from "hooks/useApi";
import { useToggle } from "hooks/useToggle";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editData } from "store/modules/mainSlice";
import FooterLayout from "../Footer/FooterLayout";
import { HeaderName } from "../Header/HeaderName";

interface Props {
  children: React.ReactNode;
  Isfooter: boolean;
}
export default function MainLayout({ children, Isfooter }: Props) {
  const APIURL = process.env.NEXT_PUBLIC_CAMPING_API_KEY;
  const router = useRouter();

  const { param } = router.query;
  const ref = useRef<any>();
  ref.current = param;
  console.log(param, "pid");
  console.log(ref.current, "ref");

  const [toggle, onToggle] = useToggle();

  // const [api, setApi] = useApi(`${APIURL}${ref.current}?memSeq=582053`);

  // console.log(api?.thankqPath, 'path');

  // const dispatch = useDispatch();

  // useEffect(() => {
  //   !!api && dispatch(editData({ ...api }));
  //   console.log(api, 'api dispatch.');
  // }, []);
  // const data = useSelector(
  //   (state: any) => state.mainData.data,
  //   (left, right) => left.data !== right.data
  // );
  // console.log(data, 'data');

  const data = useSelector(
    (state: any) => state.mainData.data,
    (left, right) => left.data !== right.data
  );

  console.log(data, "data ::");

  return (
    <div className='wrap' id='wrap'>
      <div className='wrap_in'>
        <HeaderName
          disabled={data?.thankqPath === "Y"}
          name={data?.thankqPath === "Y" ? "" : `${data?.campInfo?.campName}`}
        />
        {data?.thankqPath === "Y" ? (
          <LNB
            LOGIN={data?.isLogin}
            POINT={data?.memSeq}
            onToggle={onToggle}
            toggle={toggle}
          />
        ) : null}
        <div className='container'>{children}</div>
      </div>

      {Isfooter && <FooterLayout LOGIN={data?.thankqPath === "Y"} />}
    </div>
  );
}
