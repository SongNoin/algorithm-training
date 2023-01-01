// https://school.programmers.co.kr/learn/courses/30/lessons/140108

// 내 풀이
function solution(s) {
  let answer = 1;
  let x = s[0];
  let xCnt = 0; // x가 나온 횟수
  let noXCnt = 0; // x가 아닌 다른 글자들의 횟수
  let i = 0;
  while (s[i]) {
    if (xCnt !== 0 && xCnt === noXCnt) {
      answer++;
      s = s.substr(i);
      x = s[0];
      xCnt = 0;
      noXCnt = 0;
      i = 0;
    }
    s[i] === x ? xCnt++ : noXCnt++;
    i++;
  }
  return answer;
}

// Ref 1 (재귀 활용)
function solution(s, count = 0) {
  if (!s) return count;
  let [first, ...rest] = s.split("");
  let countSame = 1;
  let countInSame = 0;
  let i = 0;
  for (; i < rest.length; i++) {
    if (rest[i] === first) countSame++;
    else countInSame++;
    if (countSame === countInSame) break;
  }
  return solution(rest.slice(i + 1).join(""), count + 1);
}
