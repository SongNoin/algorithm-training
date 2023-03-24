// https://school.programmers.co.kr/learn/courses/30/lessons/161989

// 1. 문제의 접급방식이 만족스러웠다. 가장 적게 칠할 수 있는 방법이 금방 떠올려졌다
// 2. 시간초과 2문제가 나와서 고민을 했는데, 배열이 길어질 경우 filter 메써드가 큰 부담이겠구나 싶어 필요없다면 filter를 타지 않도록 했다.

function solution(n, m, section) {
  let answer = 0;

  while (section.length !== 0) {
    let endPoint = section[0] + m;
    section[1] <= endPoint
      ? (section = section.filter((el) => el >= endPoint))
      : section.shift();
    answer++;
  }

  return answer;
}
