// 풀이 1 (7점) https://app.codility.com/demo/results/trainingRX6QGR-8AU/
function solution(H) {
  let answer = 0;
  const stack = [H[0]];
  for (let i = 1; i < H.length; i++) {
    if (stack[stack.length - 1] === H[i]) continue;
    else if (stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      answer++;
    } else {
      for (let j = stack.length - 1; j > 0; j--) {
        if (stack[j] > H[i]) stack.pop();
      }
      stack.push(H[i]);
      answer++;
    }
  }
  return answer;
}

// 풀이 2 (100점) https://app.codility.com/demo/results/trainingA6QAHZ-9G4/
// 개선사항
// 이미 같은 높이의 사각형이 있는경우 사각형 개수에 추가되기때문에 하나 빼주었다.
// 시간복잡도 개선을 위해 같은 직사각형을 만나면 break를 해주었다.

function solution(H) {
  let answer = 0;
  const stack = [];
  for (let i = 0; i < H.length; i++) {
    if (stack[stack.length - 1] === H[i]) continue;
    else if (stack[stack.length - 1] < H[i]) {
      stack.push(H[i]);
      answer++;
    } else {
      for (let j = stack.length - 1; j >= 0; j--) {
        if (stack[j] > H[i]) stack.pop();
        else if (stack[j] === H[i]) {
          answer--;
          break;
        }
      }
      stack.push(H[i]);
      answer++;
    }
  }
  return answer;
}
