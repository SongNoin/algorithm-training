// https://www.hackerrank.com/challenges/one-month-preparation-kit-lonely-integer/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

// 풀이
function lonelyinteger(a) {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result ^= a[i];
  }
  return result;
}
