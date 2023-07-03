// https://app.codility.com/demo/results/training6XQ6YR-7WZ/

// 풀이 1 (62점)
//! Time Error
function solution(N, M) {
  let total = 0;
  const stack = [];
  while (true) {
    total += M;
    if (stack.includes(total % N)) return stack.length;
    stack.push(total % N);
  }
}

// 풀이 2 (100점)
// 최대 공약수를 사용하여 풀이
function solution(N, M) {
  const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
  return N / gcd(N, M);
}
