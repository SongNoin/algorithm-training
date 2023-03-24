// https://school.programmers.co.kr/learn/courses/30/lessons/136798

// 1. 약수를 구할때 시간초과가 나와서 https://collocationvoca.tistory.com/28 의 약수 구하기 효율을 줄이는 방법을 이용하였다
//    그중 약수를 구할때 자신의 숫자에서 절반으로 나눈 다음 약수로 구하는 방법을 적용하였다.

function solution(number, limit, power) {
  let answer = 0;
  for (i = 1; i <= number; i++) {
    let tempt = 1;
    for (j = 1; j <= i / 2; j++) {
      if (i % j === 0) tempt++;
    }
    if (tempt > limit) tempt = power;
    answer += tempt;
  }
  return answer;
}
