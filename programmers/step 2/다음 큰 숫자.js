// https://school.programmers.co.kr/learn/courses/30/lessons/12911

// 내 풀이
function solution(n) {
  let nextN = n;
  let binaryN = n.toString(2);
  let binaryNOneCnt = inBinaryOneCnt(binaryN);
  function inBinaryOneCnt(binary) {
    return binary
      .toString(2)
      .match(/1/g)
      .filter((item) => item !== "").length;
  }

  while (true) {
    nextN++;
    if (binaryNOneCnt === inBinaryOneCnt(nextN)) return nextN;
  }
}
