// https://programmers.co.kr/learn/courses/30/lessons/82612

// 내 풀이
function solution(price, money, count) {
  let total = 0;
  for (let i = 1; i <= count; i++) {
    total = total + price * i;
  }
  if (total - money < 0) return 0;
  return total - money;
}
