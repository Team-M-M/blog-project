import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Seo from '../components/layout/Header/Title';
import Script from 'next/script';
import wrapper from '../store/configureStore';
import { Provider } from 'react-redux';

function App({ Component, ...rest }: AppProps) {
  // 이안에 header랑 footer 넣을꺼임

  const { store, props } = wrapper.useWrappedStore(rest);

  return (
    <>
      {/* kakao api */}
      <Script src={`https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAOMAP_APPKEY}&libraries=services,clusterer&autoload=false`} strategy="beforeInteractive" />

      <Seo disabled={true} title={'캠핑은 여행이다.'} />

      <Provider store={store}>
        <Component {...props.pageProps} />
      </Provider>
    </>
  );
}

export default App;
