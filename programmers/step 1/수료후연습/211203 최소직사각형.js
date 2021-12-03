//https://programmers.co.kr/learn/courses/30/lessons/86491#

// 중요포인트
// 1. 몇개의 테스트에서 통과를 못했었는데, 그 이유는 카드를 돌리고 난 다음 x, y 를 선언해줬어야했다.
// 돌리기 전에 선언하면 첫번째 명함의 x y가 뒤 바뀌기에 되지 않았다.

// 내 풀이

function solution(sizes) {
  for (let i = 0; i < sizes.length; i++) {
    if (sizes[i][0] < sizes[i][1]) sizes[i] = [sizes[i][1], sizes[i][0]];
  }
  let x = sizes[0][0];
  let y = sizes[0][1];
  for (let j = 1; j < sizes.length; j++) {
    if (x < sizes[j][0]) x = sizes[j][0];
    if (y < sizes[j][1]) y = sizes[j][1];
  }
  return x * y;
}
