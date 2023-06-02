// https://app.codility.com/demo/results/trainingY74J4H-RXG/

// 풀이 1
// O(N * M) 시간복잡도
// Timeout Error
function solution(N, A) {
  let counter = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] === Number(N) + 1) {
      let maxValue = Math.max(...counter);
      counter = new Array(N).fill(maxValue);
    } else {
      counter[A[i] - 1]++;
    }
  }
  return counter;
}

// 풀이 2
// O(N * M) 시간복잡도
// Timeout Error
// Math.max 와 reduce의 시간복잡도의 차이를 알고싶어서 해보았다. 같은 시간복잡도인만큼 큰 차이가 없었다.
function solution(N, A) {
  let counter = new Array(N).fill(0);

  for (let i = 0; i < A.length; i++) {
    if (A[i] === Number(N) + 1) {
      let maxValue = counter.reduce((a, c) => (a > c ? a : c));
      counter = new Array(N).fill(maxValue);
    } else {
      counter[A[i] - 1]++;
    }
  }
  return counter;
}

// Ref 풀이 (chat gpt 개선)
// O(N + M) 시간복잡도
// 최대값을 나중에 더해주는 식으로 for문 밖에서 해결해주었다.
function solution(N, A) {
  let counter = new Array(N).fill(0);
  let maxCounter = 0; // 현재까지의 최대 카운터 값
  let lastMaxCounter = 0; // 마지막으로 갱신된 최대 카운터 값

  for (let i = 0; i < A.length; i++) {
    const currentAValue = counter[A[i] - 1];
    if (A[i] === Number(N) + 1) {
      // 최대 카운터 값을 저장하여 나중에 한꺼번에 적용
      lastMaxCounter = maxCounter;
    } else {
      // 카운터 값을 증가시키고, 최대 카운터 값 갱신
      currentAValue = Math.max(currentAValue, lastMaxCounter) + 1;
      maxCounter = Math.max(maxCounter, currentAValue);
    }
  }

  // 최대 카운터 값을 적용
  for (let i = 0; i < N; i++) {
    counter[i] = Math.max(counter[i], lastMaxCounter);
  }

  return counter;
}
