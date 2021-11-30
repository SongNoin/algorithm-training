// https://programmers.co.kr/learn/courses/30/lessons/12933

// 중요포인트
// 1. 숫자 오름차순, 내림차순 sort! 까먹지 말자
// 2. .sort() 만을 사용 했을 때 맨 앞의 자리만 정렬됨 ex ) [1,10,12,3,4,5...]
// 3. 그래서 .sort((a,b) => b-a)를 적용해 주었다.

// 내 풀이 1
function solution(n) {
  let number = String(n);
  let answer = [];
  let array = number.split("");
  for (let i = 0; i < array.length; i++) {
    answer.push(Number(array[i]));
  }
  answer.sort((a, b) => b - a);
  answer = Number(answer.join(""));
  return answer;
}
