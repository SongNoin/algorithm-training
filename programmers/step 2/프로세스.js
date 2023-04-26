// https://school.programmers.co.kr/learn/courses/13213/lessons/91078

// 내 풀이 1 (정확도 100%)
// i
function solution(priorities, location) {
  let answer = 0;

  while (true) {
    const mostPriorNum = Math.max(...priorities);

    if (priorities[0] === mostPriorNum) {
      answer++;
      if (location === 0) return answer;
      priorities.shift();
    } else {
      priorities.push(priorities[0]);
      priorities.shift();
    }

    location === 0 ? (location = priorities.length - 1) : location--;
  }
}

// 내 풀이 2 (정확도 100%)
// 클래스로 큐 로직을 배워서 써보았다.

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

function solution(priorities, location) {
  const queue = new Queue();

  for (let i = 0; i < priorities.length; i++) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a, b) => b - a);
  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]) {
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count++;
      if (location === value[1]) return count;
    }
  }
  return count;
}

// ref 1
// 큐 클래스를 간단히 구현하고 조건문의 적절한 매써드 활용이 좋아서 가져왔다
function solution(priorities, location) {
  var list = priorities.map((t, i) => ({
    my: i === location,
    val: t,
  }));
  var count = 0;
  while (true) {
    var cur = list.splice(0, 1)[0];
    if (list.some((t) => t.val > cur.val)) {
      list.push(cur);
    } else {
      count++;
      if (cur.my) return count;
    }
  }
}
