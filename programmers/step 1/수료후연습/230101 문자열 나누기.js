// https://school.programmers.co.kr/learn/courses/30/lessons/140108
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
    if (s[i] === x) {
      xCnt++;
    } else {
      noXCnt++;
    }
    i++;
  }
  return answer;
}
