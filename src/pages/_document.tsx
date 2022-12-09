import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

//Html 조작을 위한 파일 Document 컴포넌트는 오로지 서버에서만 렌더된다.
export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    console.log('START - Project/ render');
    return (
      <Html>
        {/* next/head에서 title 수정한 것과 다른 용도 모든 페이지에서 사용할 head 속성 조작 */}
        <Head>
          {/* <script dangerouslySetInnerHTML={this.redirectIEtoEdge()} /> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
          <link rel="stylesheet" as="style" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
          <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;700;900&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;700&display=swap" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap" rel="stylesheet"></link>

          <link href="https://unpkg.com/swiper/css/swiper.min.css" rel="stylesheet" />

          {/* SEO */}
          <link rel="apple-touch-icon" href="/icons/120.png" />
          <link rel="apple-touch-icon" sizes="152x152" href="/icons/152.png" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/180.png" />
          <link rel="apple-touch-icon" sizes="167x167" href="/icons/167.png" />
          <meta name="apple-mobile-web-app-capable" content="yes" />

          <meta property="og:type" content="website" />

          {/* <meta property="twitter:image" content={SITE_IMAGE} /> */}
          <meta name="format-detection" content="telephone=no, address=no, email=no" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="manifest" href="/manifest.json" />

          {/* Global site tag (gtag.js) - Google Analytics */}
          {/* <script
						async
						src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
					></script> */}
          {/* <script dangerouslySetInnerHTML={this.setGoogleAnalytics()} /> */}
        </Head>
        <body>
          {/* <ColorModeScript initialColorMode={config.initialColorMode} /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
