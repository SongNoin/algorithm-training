// 풀이 1 (66점) https://app.codility.com/demo/results/training6U7TZ8-2BP/
//! Timeout Error
// O(N**2) 시간복잡도
function solution(A) {
  if (A.length === 0) return 0;
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (A[j] - A[i] > max) max = A[j] - A[i];
    }
  }
  return max;
}

// 풀이 2 (100점) https://app.codility.com/demo/results/training42KM6P-QT8/
// O(N) 시간복잡도
// 개선사항
// 이중 for문에서 단일 for문으로 변경하였다.
// min에 A[i] 의 최솟값을 갱신해주고 maxDiff 를 가장 저렴할때와의 차이를 비교하면서 갱신해준다.
function solution(A) {
  if (A.length === 0) return 0;

  let min = A[0];
  let maxDiff = 0;

  for (let i = 1; i < A.length; i++) {
    if (A[i] < min) {
      min = A[i];
    } else if (A[i] - min > maxDiff) {
      maxDiff = A[i] - min;
    }
  }

  return maxDiff;
}
