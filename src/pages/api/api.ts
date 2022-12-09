/**
 * api 호출에 관련된 데이터를 담고 있는 함수
 * @returns useApi hook에 들어갈 상황별 url 정보
 */
export default function api(): string {
  const movie = {
    API_KEY: 'f0151314ce456acfa81500b904b2e0e7',
  };
  return `https://api.themoviedb.org/3/movie/popular?api_key=${movie.API_KEY}`;
}
