// https://school.programmers.co.kr/learn/courses/30/lessons/142086

// 1. reverse() 배열을 뒤집는 매써드여서 string 을 뒤집고 싶다면 str.split("").reverse().join("") 의 매써드를 외워두면 좋을 것 같다.
// 2. 뒤집는대신 replace 를 활용하여 체크한 문자는 다른 문자로 대체해주는 식의 풀이도 가능할것같다.

function solution(s) {
  let answer = [];
  for (let i = 0; i < s.length; i++) {
    if (s.slice(0, i).indexOf(s[i]) !== -1) {
      answer.push(s.slice(0, i).split("").reverse().join("").indexOf(s[i]) + 1);
    } else {
      answer.push(-1);
    }
  }
  return answer;
}
