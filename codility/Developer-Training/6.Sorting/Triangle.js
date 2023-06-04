//

// 풀이 1 (75점)
//! Timeout Error
// O(N**3) 시간복잡도
function solution(A) {
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
          return 1;
      }
    }
  }
  return 0;
}

// 풀이 2 (81점) https://app.codility.com/demo/results/trainingYQ4EDG-T9T/
//! Timeout Error
// O(N**3) 시간복잡도
// 개선사항 - for문 전 내림차순으로 정렬해서 빠른 return이 나오도록 해주었다.

function solution(A) {
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
          return 1;
      }
    }
  }
  return 0;
}

// 풀이 3 (75점) https://app.codility.com/demo/results/trainingCQ249Z-NNC/
//! Timeout Error
// O(N**3) 시간복잡도
// 개선사항 - 범위중에 음수도 포함이 되어있어서 for문 전에 filter로 음수제거를 해주었다.
function solution(A) {
  A.filter((el) => el > 0).sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
          return 1;
      }
    }
  }
  return 0;
}

// 풀이 4 (100점) https://app.codility.com/demo/results/training8VN5TC-SVT/
// O(N**3) 시간복잡도
// 개선사항
// A 가 전부 음수라면 early return 을 해주었다.
// 양수만 필요할때 음수가 범위에 포함된다면 처리를 해주어야겠다.
function solution(A) {
  if (A.every((el) => el < 0)) return 0;
  A.sort((a, b) => b - a);
  for (let i = 0; i < A.length - 2; i++) {
    for (let j = i + 1; j < A.length - 1; j++) {
      for (let k = j + 1; k < A.length; k++) {
        if (A[i] + A[j] > A[k] && A[j] + A[k] > A[i] && A[k] + A[i] > A[j])
          return 1;
      }
    }
  }
  return 0;
}
