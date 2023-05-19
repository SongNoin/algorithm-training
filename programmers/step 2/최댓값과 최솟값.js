// https://school.programmers.co.kr/learn/courses/30/lessons/12939

function solution(s) {
  const sortedArr = s.split(" ").sort((a, b) => a - b);
  return sortedArr[0] + " " + sortedArr.at(-1);
}
