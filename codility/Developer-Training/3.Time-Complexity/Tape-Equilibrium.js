// https://app.codility.com/demo/results/trainingKQFF23-P5S/

// 내 풀이 1 (100점)
// O(N) 시간복잡도
function solution(A) {
  const totalLength = A.reduce((a, b) => a + b);
  let currentLength = 0;
  let minimumDifference = Infinity;
  for (let i = 0; i < A.length - 1; i++) {
    currentLength += A[i];
    let difference = Math.abs(totalLength - currentLength - currentLength);
    if (difference < minimumDifference) minimumDifference = difference;
  }
  return minimumDifference;
}
