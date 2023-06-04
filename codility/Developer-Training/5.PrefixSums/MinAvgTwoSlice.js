// https://app.codility.com/demo/results/training6DK8UF-FUX/

// 풀이 1(50점)
//! Timeout Error
// O(N**3) 시간복잡도
function solution(A) {
  let min = Infinity;
  let answer = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      const minAverageSlicedA =
        A.slice(i, j + 1).reduce((a, c) => a + c) / (j - i + 1);
      if (minAverageSlicedA < min) {
        min = minAverageSlicedA;
        answer = i;
      }
    }
  }
  return answer;
}

// 풀이 2 (100점)
// O(N) 시간복잡도
// 개선사항
// 1. 최소 평균을 구할때 굳이 slice가 3 개이하인 경우만 계산해주면 될 것 같아서 두번째 for문에 한계를 주었다.
// 2. 다만 여기서 중요한게 A.length가 i+4보다 작을수도 있어서 이를 삼항연산자로 처리해주었다.
function solution(A) {
  let min = Infinity;
  let answer = 0;
  for (let i = 0; i < A.length - 1; i++) {
    let maxJ = A.length < i + 4 ? A.length : i + 4;
    for (let j = i + 1; j < maxJ; j++) {
      const minAverageSlicedA =
        A.slice(i, j + 1).reduce((a, c) => a + c) / (j - i + 1);
      if (minAverageSlicedA < min) {
        min = minAverageSlicedA;
        answer = i;
      }
    }
  }
  return answer;
}
