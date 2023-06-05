// 풀이 1 (100점)
// 앞 Brackets 문제 풀이 방식을 배운덕에 더욱 간단하게 풀 수 있었다.
// 마찬가지로 stack에서 짝이 나오면 제거해주고 아니면 바로 0를 return하게하고 ( 만 쌓이는 것을 대비해 마지막에 stack의 길이로 검사해주었다.
function solution(S) {
  const stack = [];
  for (let i = 0; i < S.length; i++) {
    if (S[i] === "(") stack.push("(");
    else {
      if (stack[stack.length - 1] === "(") stack.pop();
      else return 0;
    }
  }
  if (stack.length > 0) return 0;
  else return 1;
}
