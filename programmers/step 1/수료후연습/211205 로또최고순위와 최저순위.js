// https://programmers.co.kr/learn/courses/30/lessons/77484#

// 중요포인트
// 1. 삼항연산자를 이렇게 난무할 생각은 없었는데 정답조건을 맞추다보니 길어졌다... 줄일 수 있을까?
// 2. 문제는 너무 길었는데 생각보다 간단하게 풀려서 재밌었다.
// 3. 다른사람의 풀이를 보니 rank라는 배열에 담아서 순위를 보여주는것이 신선했다. const rank = [6,6,5,4,3,2,1]

// 내 풀이

function solution(lottos, win_nums) {
  let correct = [];
  let zeros = 0;
  for (let i = 0; i < 6; i++) {
    if (lottos.includes(win_nums[i])) correct.push(win_nums[i]);
    if (lottos[i] === 0) zeros++;
  }
  return [
    7 - correct.length - zeros > 6 ? 6 : 7 - correct.length - zeros,
    correct.length === 0 ? 6 - correct.length : 7 - correct.length,
  ];
}
