// 풀이 1 (37점) https://app.codility.com/demo/results/trainingF5HE4C-4DQ/
//! Wrong Answer
function solution(A, B) {
  const stack = [[A[0], B[0]]];
  for (let i = 1; i < A.length; i++) {
    let size = A[i];
    let direction = B[i];
    if (stack[stack.length - 1][1] === 1 && direction === 0) {
      if (stack[stack.length - 1][0] <= size) {
        stack.pop();
        stack.push([size, direction]);
      }
    } else stack.push([size, direction]);
  }
  return stack.length;
}

// 풀이 2 (75점) https://app.codility.com/demo/results/trainingKH5JTX-RN6/
//! Wrong Answer
// 개선사항
// 추가되는 물고기가 앞 하류로 가는 물고기를 먹었을때 그 이전 물고기에 대한 처리도 해주었다.
function solution(A, B) {
  const stack = [[A[0], B[0]]];
  for (let i = 1; i < A.length; i++) {
    let size = A[i];
    let direction = B[i];
    if (stack[stack.length - 1][1] === 1 && direction === 0) {
      if (stack[stack.length - 1][0] < size) {
        for (let j = stack.length - 1; j >= 0; j--) {
          if (stack[j][1] === 1 && stack[j][0] < size) stack.pop();
          else if (stack[j][1] === 0) {
            stack.push([size, direction]);
            break;
          } else {
            break;
          }
        }
      }
    } else stack.push([size, direction]);
  }
  return stack.length;
}

// 풀이 3 (100점) https://app.codility.com/demo/results/training7ZH3ZZ-8HZ/
// 개선사항
// stack이 아예 없는 경우가 있는데 이런경우 1을 리턴하도록 해주었다.
function solution(A, B) {
  const stack = [[A[0], B[0]]];
  for (let i = 1; i < A.length; i++) {
    let size = A[i];
    let direction = B[i];
    if (stack[stack.length - 1][1] === 1 && direction === 0) {
      if (stack[stack.length - 1][0] < size) {
        for (let j = stack.length - 1; j >= 0; j--) {
          if (stack[j][1] === 1 && stack[j][0] < size) stack.pop();
          else if (stack[j][1] === 0) {
            stack.push([size, direction]);
            break;
          } else {
            break;
          }
        }
      }
    } else stack.push([size, direction]);
  }
  return stack.length === 0 ? 1 : stack.length;
}
