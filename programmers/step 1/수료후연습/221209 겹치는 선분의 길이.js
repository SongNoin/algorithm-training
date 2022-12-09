// https://school.programmers.co.kr/learn/courses/30/lessons/120876

// 1. 세 선분을 지나가는 정수의 배열로 정의하고 각각 교집합을 모아주었다. 그 뒤 중복을 제거해주었다.
// 2. 1번방법으로 하게되면 두개 이상 지나가는 정수만 배열에 모이게 되어 그 수를 세어주면 된다.

function solution(lines) {
  const first = [];
  const second = [];
  const third = [];
  let temp = [];
  for (let i = lines[0][0] + 1; i <= lines[0][1]; i++) {
    first.push(i);
  }
  for (let i = lines[1][0] + 1; i <= lines[1][1]; i++) {
    second.push(i);
  }
  for (let i = lines[2][0] + 1; i <= lines[2][1]; i++) {
    third.push(i);
  }
  temp = temp.concat(first.filter((x) => second.includes(x)));
  temp = temp.concat(second.filter((x) => third.includes(x)));
  temp = temp.concat(third.filter((x) => first.includes(x)));
  const set = new Set(temp);
  const answer = [...set];
  return answer.length;
}
