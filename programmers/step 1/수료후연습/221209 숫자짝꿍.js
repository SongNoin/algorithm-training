// https://school.programmers.co.kr/learn/courses/30/lessons/131128#

// 1. 시간초과오답
function solution(X, Y) {
  let answer = [];
  for (let i = 0; i < X.length; i++) {
    if (Y.includes(X[i])) {
      answer.push(X[i]);
      Y = Y.replace(X[i], "");
    }
  }
  if (answer.length === 0) {
    return "-1";
  } else if (answer[0] === "0") {
    return "0";
  } else {
    answer.sort((a, b) => b - a);
    answer = answer.join("");
  }
  return answer;
}
