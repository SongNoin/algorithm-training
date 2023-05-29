// https://school.programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  let proNum = 0;
  let temp = 0;
  let answer = [];

  while (proNum < progresses.length) {
    temp = 0;
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    if (progresses[proNum] >= 100) {
      for (let j = proNum; j < progresses.length; j++) {
        if (progresses[j] >= 100) {
          temp++;
          proNum++;
        } else {
          answer.push(temp);
          break;
        }
      }
    }
  }
  answer.push(temp);
  return answer;
}
