// https://programmers.co.kr/learn/courses/30/lessons/12969

// 중요포인트
// 1. 기본 틀이 옛 js 문법인것 같아서 좀 혼란스러웠지만 콘솔이 곧 리턴임을 알고 쉽게 해결했다.
// 2. .repeat(정수) 참 편리하다

// 내 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  for (let i = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
});
