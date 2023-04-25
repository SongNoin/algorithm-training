// https://school.programmers.co.kr/learn/courses/30/lessons/12909
// 중요포인트
// 1. 해당 문제는 Stack 문제였다. 내가 푼 풀이에서 count하나의 변수로만 제어한다면 그 또한 Stack 개념으로 볼 수 있다.

// 내 풀이 1 (정확성 실패)
function solution(s) {
  return s[0] === "(" && s[s.length - 1] === ")" ? true : false;
}

// 내 풀이 2 (성공)
function solution(s) {
  let left = 0;
  let right = 0;

  for (const str of s) {
    str === "(" ? left++ : right++;
    if (right > left) return false;
  }

  return left === right;
}

// Ref (Stack을 활용한 풀이)
function solution(s) {
  const stack = [];
  for (const el of s) {
    if (el === "(") {
      stack.push(el);
    } else {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0;
}
