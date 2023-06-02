// https://app.codility.com/demo/results/training24777C-GUP/

// 풀이
function solution(A, K) {
  for (i = 0; i < K; i++) {
    A.unshift(A[A.length - 1]);
    A.pop();
  }
  return A;
}
