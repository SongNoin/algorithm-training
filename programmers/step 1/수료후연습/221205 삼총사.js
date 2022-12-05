//https://school.programmers.co.kr/learn/courses/30/lessons/131705

// 1. 문제 이름을 보고 삼중 for문일거같았는데 역시였다.

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length; i++) {
    for (let j = 0; j < i; j++) {
      for (let k = 0; k < j; k++) {
        if (number[i] + number[j] + number[k] === 0) answer++;
      }
    }
  }
  return answer;
}
