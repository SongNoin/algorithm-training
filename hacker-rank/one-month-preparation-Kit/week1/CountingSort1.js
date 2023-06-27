// https://www.hackerrank.com/challenges/one-week-preparation-kit-countingsort1/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-week-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-week-day-two
// 풀이
// 풀이과정보다 문제에서 많이 배웠다.
// 더욱 효율적인 정렬 로직을 생각했을때 이런 방법도 있겠구나 생각이 들었다.
function countingSort(arr) {
  const cntArr = new Array(100).fill(0);
  for (let i = 0; i < arr.length; i++) cntArr[arr[i]] += 1;
  return cntArr;
}
