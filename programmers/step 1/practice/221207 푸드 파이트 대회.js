// https://school.programmers.co.kr/learn/courses/30/lessons/134240/solution_groups?language=javascript&type=my

// 1. 음식이 홀수인경우 짝수로 바꿔줘야하였는데 처음엔 for문을 두번 돌렸다가 for문 한번으로 처리해주기 위해 Math.floor를 통해 홀수를 2로 나누어도 버림 처리를 했다.
// 2. 문자열.repeat() 이 기억이 나지않았다 다시한번 상기하게 되었다.
// 3. 다른사람 풀이 보니 .reverse()를 이용해 답에 붙여주었다.

function solution(food) {
  let answer = "0";
  for (let i = food.length; i > 0; i--) {
    answer =
      String(i).repeat(Math.floor(food[i] / 2)) +
      answer +
      String(i).repeat(Math.floor(food[i] / 2));
  }
  return answer;
}
