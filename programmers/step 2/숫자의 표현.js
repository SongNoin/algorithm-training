// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 효율성이 중요한 문제 인것 같아서 이중 for문 안쪽 for 문의 range를 달성해야할 값 절반으로 정해주었다.

// 내 풀이
function solution(n) {
  let answer = 1;
  for (let i = 1; i < n / 2; i++) {
    let sum = 0;
    for (let j = i; j <= n / 2 + 1; j++) {
      sum += j;
      if (sum === n) answer++;
      if (sum > n) break;
    }
  }
  return answer;
}
