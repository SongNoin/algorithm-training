// 풀이 1 (16점) https://app.codility.com/demo/results/trainingBN29SJ-XC6/
//! Wrong Answer
function solution(A) {
  A.sort((a, b) => a - b);
  let prevNum = Infinity;
  let numCnt = 0;
  for (let i = 0; i < A.length; i++) {
    if (prevNum === A[i]) {
      numCnt++;
    } else {
      prevNum = A[i];
      numCnt = 0;
    }
    if (numCnt >= A.length / 2) return i;
  }
  return -1;
}

// 풀이 2 (83점) https://app.codility.com/demo/results/training5KGKEZ-FCP/
//! Wrong Answer
// 개선사항
// 평균값을 비교할때 내림처리를 빼서 추가해주었다.
function solution(A) {
  A.sort((a, b) => a - b);
  let prevNum = Infinity;
  let numCnt = 0;
  for (let i = 0; i < A.length; i++) {
    if (prevNum === A[i]) {
      numCnt++;
    } else {
      prevNum = A[i];
      numCnt = 0;
    }
    if (numCnt >= Math.floor(A.length / 2)) return i;
  }
  return -1;
}

// 풀이 3 (100점) https://app.codility.com/demo/results/trainingMJUT4R-6XH/
// 개선사항
// 위의 답은 정렬된 상태에서 index를 찾아버려서 사실 완전히 틀린답이었다.
// 절반 이상이아니라 초과여서 수정하였고 객체 형식으로 바꾸면 더욱 효율과 가독성이 좋을것 같아서 객체로 관리해주었다.
function solution(A) {
  const counter = {};
  const half = A.length / 2;
  for (let i = 0; i < A.length; i++) {
    if (A[i] in counter) counter[A[i]] = counter[A[i]] + 1;
    else counter[A[i]] = 1;
    if (counter[A[i]] > half) return i;
  }
  return -1;
}
