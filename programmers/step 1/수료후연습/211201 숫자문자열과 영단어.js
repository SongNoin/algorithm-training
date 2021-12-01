// https://programmers.co.kr/learn/courses/30/lessons/81301

// 중요포인트
// 1. includes(포함단어) => true / false
// 2. .replace(기존단어, 변경할 단어)

// 내 풀이

function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];

  for (let i = 0; i < numbers.length; i++) {
    if (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
    if (s.includes(numbers[i])) {
      s = s.replace(numbers[i], i);
    }
  }
  return Number(s);
}
