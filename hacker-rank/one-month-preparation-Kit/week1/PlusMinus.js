// https://www.hackerrank.com/challenges/one-month-preparation-kit-plus-minus/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one
// 풀이
function plusMinus(arr) {
  let plus = 0;
  let zero = 0;
  let minus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) plus++;
    else if (arr[i] === 0) zero++;
    else minus++;
  }
  console.log(
    String((plus / arr.length).toFixed(6)) +
      "\n" +
      String((minus / arr.length).toFixed(6)) +
      "\n" +
      String((zero / arr.length).toFixed(6))
  );
}
