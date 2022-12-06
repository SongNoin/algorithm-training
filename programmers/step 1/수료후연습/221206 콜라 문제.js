// https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer = answer + b * Math.floor(n / a);
    n = b * Math.floor(n / a) + (n % a);
  }
  return answer;
}
