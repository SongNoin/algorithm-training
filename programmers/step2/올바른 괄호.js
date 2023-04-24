// https://school.programmers.co.kr/learn/courses/30/lessons/12909

// 나의 풀이
function solution(s) {
  return s[0] === "(" && s[s.length - 1] === ")" ? true : false;
}
