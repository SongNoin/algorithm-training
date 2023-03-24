// https://school.programmers.co.kr/learn/courses/30/lessons/133499

// 1. 코드를 짜면서도 로직이 너무 헷갈려서 단어가 포함하면 그 단어를 반환하는 함수를 따로 만들어 주었더니 좀 더 나았다
// 2. substr, indexOf 는 사용하기 편리했지만 현재코드애서 가독성이 좋다고는 할 수 없을 것 같다.
// 3. 다른 사람들은 더 편리하고 간편하게 정규식을 활용한듯..? ㅠㅠ

// 내 풀이
function solution(babbling) {
  let answer = 0;
  for (let i = 0; i < babbling.length; i++) {
    while (isContainWord(babbling[i]).length) {
      let prevWord = isContainWord(babbling[i]);
      babbling[i] = babbling[i].substr(isContainWord(babbling[i]).length);
      if (!babbling[i].indexOf(prevWord)) {
        break;
      }
    }
    if (!babbling[i]) answer++;
  }

  function isContainWord(babble) {
    let words = ["aya", "ye", "woo", "ma"];
    for (let j = 0; j < words.length; j++) {
      let babPos = babble.indexOf(words[j]);
      if (!babPos) {
        return words[j];
      }
    }
    return [];
  }
  return answer;
}

// Ref 1 (정규식 활용)

function solution(babbling) {
  const regexp1 = /(aya|ye|woo|ma)\1+/;
  const regexp2 = /^(aya|ye|woo|ma)+$/;

  return babbling.reduce(
    (ans, word) => (!regexp1.test(word) && regexp2.test(word) ? ++ans : ans),
    0
  );
}
