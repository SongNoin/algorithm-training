// https://app.codility.com/demo/results/training9PC5YG-ARE/

// 풀이 1 (44점)
//! Wrong Answer
function solution(A) {
  A.sort((a, b) => a - b);
  return A.slice(A.length - 3, A.length).reduce((a, b) => a * b);
}

// 풀이 2
// O(N+log(N)) 시간복잡도
// 개선사항
// 음수 두개를 포함할경우 양수가 되는 경우를 제외했었다.
function solution(A) {
  A.sort((a, b) => a - b);
  const first = A[0] * A[1] * A[A.length - 1];
  const last = A[A.length - 1] * A[A.length - 2] * A[A.length - 3];
  if (last > first) return last;
  else return first;
}
