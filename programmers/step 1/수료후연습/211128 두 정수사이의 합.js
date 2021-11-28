// https://programmers.co.kr/learn/courses/30/lessons/12912

// 내 풀이 1

function solution(a, b) {
  let answer = 0;
  if (a === b) {
    return a;
  }
  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
    }
  } else if (a > b) {
    for (let i = b; i <= a; i++) {
      answer += i;
    }
  }

  return answer;
}
