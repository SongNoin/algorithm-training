// https://school.programmers.co.kr/learn/courses/30/lessons/138477

function solution(k, score) {
  let honorList = [];
  let answer = [];
  for (let i = 0; i < score.length; i++) {
    honorList.push(score[i]);
    honorList.sort((a, b) => a - b);
    if (honorList.length > k) honorList.shift();
    answer.push(honorList[0]);
  }
  return answer;
}
