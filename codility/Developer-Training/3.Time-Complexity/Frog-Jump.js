// https://app.codility.com/demo/results/trainingBQ44UZ-952/

// 내 풀이 1 (55점 - TIMEOUT ERROR)
// O(Y-X) 시간복잡도
function solution(X, Y, D) {
  let answer = 0;
  while (X < Y) {
    X += D;
    answer++;
  }
  return answer;
}

// 내 풀이 2 (100점)
// O(1) 시간복잡도
// 첫번째 답은 굳이굳이 반복문을 사용했다. 수식으로만으로도 풀 수 있는 문제였다.
function solution(X, Y, D) {
  return Math.ceil((Y - X) / D);
}
