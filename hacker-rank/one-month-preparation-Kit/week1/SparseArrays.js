// https://www.hackerrank.com/challenges/one-month-preparation-kit-sparse-arrays/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one
// 풀이
function matchingStrings(strings, queries) {
  const answer = [];
  for (let i = 0; i < queries.length; i++) {
    let cnt = 0;
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}
