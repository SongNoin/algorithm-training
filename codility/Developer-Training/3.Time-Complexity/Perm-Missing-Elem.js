// https://app.codility.com/demo/results/trainingYY52R6-VW8/

// 내 풀이 1 (50점)
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 1; i <= A.length; i++) {
    if (A[i - 1] !== i) return i;
  }
}

// 내 풀이 2
// O(N) 시간 복잡도
// 추가한 예외조건
// 1. 빠진 숫자가 가장 큰 수 인 경우
// 2. for문 안 if 조건문에 걸리지않아 return 자체가 되지 않는 경우
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 1; i <= A.length; i++) {
    if (A[i - 1] !== i) return i;
  }
  return A.length + 1;
}
