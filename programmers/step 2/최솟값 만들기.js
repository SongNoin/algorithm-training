// https://school.programmers.co.kr/learn/courses/30/lessons/12941
// 곱셈은 곱할 두 값이 같이 커지는 것 보다 두값의 밸런스를 맞춰줘야해서 A를 내림차순 B를 오름차순 해주어서 곱해주었다.
// 내 풀이
function solution(A, B) {
  let answer = 0;
  A.sort((a, b) => b - a);
  B.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) answer += A[i] * B[i];
  return answer;
}

// 다른사람 풀이
// 내 풀이에서 reduce를 사용하면 더 간단하게 표현해줄 수 있다.
function solution(A, B) {
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  return A.reduce((total, val, idx) => total + val * B[idx], 0);
}
