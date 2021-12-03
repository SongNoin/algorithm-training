// https://programmers.co.kr/learn/courses/30/lessons/77884

// 중요포인트
// 1. 코드를 휘갈기다보니 푼 케이스.. 좀더 복잡한 문제였으면 시간이 오히려 더 걸렸을것 같다. 좋지는 않은 습관 같다.

// 내 풀이
function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    let div = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) div++;
    }
    div % 2 === 0 ? (answer += i) : (answer -= i);
  }
  return answer;
}
