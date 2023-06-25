// https://www.hackerrank.com/challenges/one-month-preparation-kit-diagonal-difference/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

// 풀이
function diagonalDifference(arr) {
  let leftToRight = 0;
  let rightToleft = 0;
  for (let i = 0; i < arr.length; i++) {
    rightToleft += arr[i][arr.length - 1 - i];
  }
  for (let j = 0; j < arr.length; j++) {
    leftToRight += arr[j][j];
  }
  return Math.abs(rightToleft - leftToRight);
}
