// https://app.codility.com/demo/results/trainingWQASA7-NCS/

// 풀이 1 (9점)
function solution(X, A) {
  const leaves = new Array(X + 1).fill(0);
  for (let i = 1; i < A.length; i++) {
    leaves[i - 1] = 1;
    if (!leaves.includes(0)) return i;
  }
  return -1;
}

// 풀이 2 (81점)
// O(N) 시간복잡도
// Timeout Error
// 개선한 사항
// 1. i를 index 삼는게 아닌 A[i] 였는데 실수로 i를 넣었다. (꼭 다른 입출력예제 추가할것)
function solution(X, A) {
  const leaves = new Array(X).fill(0);
  for (let i = 0; i < A.length; i++) {
    leaves[A[i] - 1] = 1;
    if (!leaves.includes(0)) return i;
  }
  return -1;
}

// 풀이3 (100점)
// O(1)시간복잡도
// 개선한 사항
// timeout 에러로 인해 최적화를 위해 배열에서 Set으로 전환하였다.

function solution(X, A) {
  const leaves = new Set();
  for (let i = 0; i < A.length; i++) {
    leaves.add(A[i]);
    if (leaves.size === X) return i;
  }
  return -1;
}
