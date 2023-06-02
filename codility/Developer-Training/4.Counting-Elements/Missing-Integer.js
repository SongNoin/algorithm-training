// https://app.codility.com/demo/results/trainingWUH98T-CAD/

// 풀이 1 (88점)
// wrong answer
function solution(A) {
  const setA = new Set(A);
  for (let i = 1; i < A.length; i++) {
    if (!setA.has(i)) return i;
  }
  return A.length + 1;
}

// 풀이 2 (100점)
// 개선사항
// 1. input 배열길이가 1인 경우 for문에 접근되지 않아서 부등호를 변경했다.
function solution(A) {
  const setA = new Set(A);
  for (let i = 1; i <= A.length; i++) {
    if (!setA.has(i)) return i;
  }
  return A.length + 1;
}
