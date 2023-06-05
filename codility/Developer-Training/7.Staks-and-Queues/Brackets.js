// 풀이 1 (100점) https://app.codility.com/demo/results/trainingRHAFKF-35Q/
// O(N) 시간복잡도
// Stack을 활용하면 쉽게 풀수 있지만 다른 방식으로 접근하다가 오래 걸려서 풀었다.
// Stack에 닫히면 바로 pop으로 빼주는 방식을 통해 해결
function solution(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(" || S[i] === "{" || S[i] === "[") stack.push(S[i]);
    else if (S[i] === ")" && stack[stack.length - 1] === "(") stack.pop();
    else if (S[i] === "}" && stack[stack.length - 1] === "{") stack.pop();
    else if (S[i] === "]" && stack[stack.length - 1] === "[") stack.pop();
    else return 0;
  }
  if (stack.length === 0) return 1;
  else return 0;
}
