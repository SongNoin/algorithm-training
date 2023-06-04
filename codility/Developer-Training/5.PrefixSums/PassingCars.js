// https://app.codility.com/demo/results/trainingDVHYGK-7TY/

// 풀이 1 (100점)
function solution(A) {
  let eastCount = 0;
  let passingCount = 0;

  for (let i = 0; i < A.length; i++) {
    if (A[i] === 0) eastCount++;
    else passingCount += eastCount;

    if (passingCount > 1000000000) return -1;
  }

  return passingCount;
}
