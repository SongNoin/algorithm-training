// https://programmers.co.kr/learn/courses/30/lessons/12922

// 배운점
// 1 문자열.repeat(정수) 를 통해 정수만큼 문자열을 반복 시킬 수 있다
// 2 문자를 추가할 때 간단하게 + 하기

// 내 풀이 1

function solution(n) {
  let subak = "수박";
  let answer = subak.repeat(n / 2);
  if (n % 2 === 1) {
    answer = answer + "수";
  }

  return answer;
}
