// https://school.programmers.co.kr/learn/courses/30/lessons/176963

// 내 풀이 1
function solution(name, yearning, photo) {
  const answer = [];
  for (let i = 0; i < photo.length; i++) {
    let score = 0;
    for (let j = 0; j < photo[i].length; j++) {
      const index = name.findIndex((el) => el === photo[i][j]);
      if (index >= 0) score = score + yearning[index];
    }
    answer.push(score);
  }
  return answer;
}
