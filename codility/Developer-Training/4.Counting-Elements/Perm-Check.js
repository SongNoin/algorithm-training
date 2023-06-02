// https://app.codility.com/demo/results/trainingX9DF9W-QCN/
// 풀이 1 (100점)
// O(N) 시간복잡도
function solution(A) {
  A.sort((a, b) => a - b);
  for (let i = 0; i < A.length; i++) {
    if (A[i] !== i + 1) return 0;
  }
  return 1;
}
