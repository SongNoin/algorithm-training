// https://app.codility.com/demo/results/training3TGAKJ-YPG/

// 풀이 (62점)
//! Timeout Error
// O(N*M) 시간복잡도
function solution(S, P, Q) {
  let numS = "";
  const answer = [];
  for (let i = 0; i < S.length; i++) {
    let addStr = "";
    if (S[i] === "A") addStr = 1;
    if (S[i] === "C") addStr = 2;
    if (S[i] === "G") addStr = 3;
    if (S[i] === "T") addStr = 4;
    numS += addStr;
  }
  for (let i = 0; i < P.length; i++) {
    let firshIdx = P[i];
    let lastIdx = Q[i] + 1;
    let cuttedS = numS.slice(firshIdx, lastIdx).split("");
    answer.push(Math.min(...cuttedS));
  }
  return answer;
}

// Ref 풀이 https://jacobgrowthstory.tistory.com/84?category=950813 (100점)
// 시간복잡도를 개선하지 못해서 나와 가장 비슷한 풀이 중 통과한 참조코드
// 배열로 전환하지않고 문자열 자체에서 해결하여서 빠른 시간복잡도를 구현할 수 있는것 같다.
// O(N+M) 시간복잡도
function solution(S, P, Q) {
  let part = "";
  let result = [];

  for (var i = 0; i < P.length; i++) {
    part = S.slice(P[i], Q[i] + 1);

    if (part.indexOf("A") !== -1) {
      result.push(1);
    } else if (part.indexOf("C") !== -1) {
      result.push(2);
    } else if (part.indexOf("G") !== -1) {
      result.push(3);
    } else {
      result.push(4);
    }
  }

  return result;
}
