// https://school.programmers.co.kr/learn/courses/30/lessons/135808

// 1. 시간초과 몇문제가 떴었는데 for 문을 하나 빼주니 해결되었다.
// 2. 렌더링 초과 케이스에서는 이익이 없을 때 인거 같아서 (0을 다루는 케이스) 얼리 리턴을 추가 해주었다.

function solution(k, m, score) {
  let boxes = [];

  // 1상자도 못만들 경우 얼리 리턴
  if (score.length < m) {
    return 0;
  }

  // 내림차순으로 정리
  score.sort((a, b) => {
    return b - a;
  });

  // 상자별 가격 뽑기
  for (let i = 0; i < score.length; i += m) {
    if (score[i + m - 1]) {
      boxes.push(score[i + m - 1] * m);
    }
  }

  // 총 상자 가격을 합산하여 리턴
  return boxes.reduce((sum, current) => sum + current);
}
