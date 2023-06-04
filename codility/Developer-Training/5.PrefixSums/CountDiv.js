// https://app.codility.com/demo/results/trainingDVHYGK-7TY/
// 풀이 1 (12점)
//! Wrong answer , Timeout Error
function solution(A, B, K) {
  let answer = 0;
  for (let i = A; i < B; i++) {
    if (i % K === 0) answer++;
  }
  return answer;
}

// 풀이 2 (50점)
//! Timeout Error
// O(M -N) 시간 복잡도
// 개선 사항
// 1. A, B가 같으면 for문을 타지 않는 경우가 있었다.
function solution(A, B, K) {
  let answer = 0;
  for (let i = A; i <= B; i++) {
    if (i % K === 0) answer++;
  }
  return answer;
}

// 풀이 3 (100점)
// O(1) 시간 복잡도
// 개선사항
// 굳이 for문이 필요없는 문제였다.수식으로만 처리해주었다.
function solution(A, B, K) {
  const divCnt = Math.floor(B / K) - Math.floor(A / K);
  return A % K === 0 ? divCnt + 1 : divCnt;
}
