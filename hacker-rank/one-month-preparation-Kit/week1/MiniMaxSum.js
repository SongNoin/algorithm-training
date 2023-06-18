// https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one
// 풀이
function miniMaxSum(arr) {
  let min = 0;
  let max = 0;
  arr.sort((a, b) => a - b);
  min = arr.slice(0, arr.length - 1).reduce((a, c) => a + c);
  max = arr.slice(1, arr.length).reduce((a, c) => a + c);
  console.log(min, max);
}
