// https://app.codility.com/demo/results/training2UMCR8-VE9/
// 풀이 1 (100점)
// O(N) 시간복잡도
function solution(A) {
  const uniqueA = [...new Set(A)];
  return uniqueA.length;
}
