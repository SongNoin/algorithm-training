// https://school.programmers.co.kr/learn/courses/13213/lessons/91086

// 내 풀이 1 (정확성 모두 통과, 효율성 2개 실패)
function solution(no, works) {
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  // 작업의 효율을 위한 내림차순 정렬
  works.sort((a, b) => b - a);

  for (let i = 0; i < no; i++) {
    const maxWorkTime = Math.max(...works);
    if (maxWorkTime === 0) break;
    const maxWorkTimeIndex = works.findIndex((el) => el === maxWorkTime);
    works[maxWorkTimeIndex]--;
  }

  return works.reduce((a, b) => a + b * b, 0);
}

// 내 풀이 1-1 (gpt가 바꿔준 코드, 모두 통과)
// 1. 작업시간의 총합이 no보다 작을 때, 0을 반환하도록 바로 리턴합니다. 이렇게 하면 함수 실행 도중에 필요 없는 작업을 처리하는 것을 줄일 수 있습니다.
// 2. works 배열의 최대값을 찾는 대신, 배열을 순회하면서 작업 시간이 no보다 큰 작업에 대해서만 처리하도록 합니다. 이렇게 하면 큰 작업에 대해서만 처리하므로 불필요한 작업을 줄일 수 있습니다.
function solution(no, works) {
  const totalWorkTime = works.reduce((acc, cur) => acc + cur);

  if (totalWorkTime <= no) {
    return 0;
  }

  let maxWorkTime = Math.max(...works);

  while (no > 0) {
    for (let i = 0; i < works.length; i++) {
      if (works[i] === maxWorkTime && no > 0) {
        works[i]--;
        no--;
      }
    }
    maxWorkTime--;
  }

  return works.reduce((acc, cur) => acc + cur ** 2, 0);
}

// Ref 1 (강의 코드)
// heap 코드를 사용했다 확실히 빠른 효율을 낸다
function solution(no, works) {
  // 모든 작업의 합보다 no가 크면 배상 비용을 낼 필요가 없다.
  if (works.reduce((a, b) => a + b) <= no) {
    return 0;
  }

  // max heap 구성
  const heap = new MaxHeap();
  for (const work of works) {
    heap.push(work);
  }

  // no만큼 루프 돌면서 가장 큰 값을 빼서 처리 후 다시 push
  for (let i = 0; i < no; i += 1) {
    heap.push(heap.pop() - 1);
  }

  // 남은 요소에 제곱한 값들의 합을 구한 후 반환
  return heap.heap.reduce((a, b) => a + b * b);
}
class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우

    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }
}
