// 풀이 1 (81점) https://app.codility.com/demo/results/trainingPKZBAX-BQP/
//! Timeout Error
// O(N**2) 시간복잡도
function solution(A) {
  let answer = 0;
  for (let i = 0; i < A.length - 1; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (i + A[i] >= j - A[j]) answer++;
    }
  }
  return answer;
}

// Ref 풀이 https://velog.io/@sohyeonbak_oly/Codility-Lesson6-Sorting-NumberOfDiscIntersections-JavaScript
// O(N**2) 시간복잡도
// 효율성을 개선할 방법을 모르겠어서 참고했다.
// 개선사항
// sort 왼쪽값 오른차순, 같다면 오른쪽값 내림차순을 해주어서 왼쪽원부터 비교하고 같다면 더 큰원 먼저 비교한다는 뜻이다.
// 겹치지 않을때부터는 break를 통해 반복문을 나온다.
function solution(A) {
  let answer = 0;
  let newA = A.map((el, i) => [i - el, i + el]);
  newA.sort((a, b) => {
    if (a[0] !== b[0]) return a[0] - b[0];
    else return b[1] - a[1];
  });
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A.length; j++) {
      if (newA[i][0] <= newA[j][0] && newA[i][1] >= newA[j][0]) answer++;
      else break;
      if (answer > 10000000) return -1;
    }
  }
  return answer;
}
