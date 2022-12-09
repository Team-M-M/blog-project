const path = require('path');
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 임시로 false
  swcMinify: true,
  // eslint: {
  //   ignoreDuringBuilds: true,
  // },
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  compiler: {
    styledComponents: true,
  },
  // 경로 설정
  /** 
   *  @cpt4567 위와 같이 세팅시 path 생략 가능 차후 개발 확인 요망
   * */  
  /* webpack(config, { webpack }) {
    config.resolve = {
      alias: {
        '@path': path.resolve(__dirname, 'src/folder'),
      },
      ...config.resolve
    };
    return config;
  }, */

  async redirects() {
    return [
      {
        source: '/main',
        destination: '/reservation',
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/movies',
        destination: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`,
      },
    ];
  },
};

module.exports = nextConfig;
