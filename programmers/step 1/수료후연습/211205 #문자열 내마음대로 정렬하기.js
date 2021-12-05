// https://programmers.co.kr/learn/courses/30/lessons/12915

// 중요포인트
// 1. 혼자 풀고 싶었지만 이 reference를 보고 도저히 다른 해결법이 떠오르지 않았다.
// 2. .sort() 안에 함수를 담을 수 있고 그 응용은 무궁무진하다는걸 알게 되었다.
// 3. sort((a,b) => 1) 정렬 / sort((a,b) => -1) 역정렬 / sort((a,b) => -1) 정렬유지

// Reference 링크 https://velog.io/@ellie12/%EC%BD%94%EB%94%A9%ED%85%8C%EC%8A%A4%ED%8A%B8-%EB%AC%B8%EC%9E%90%EC%97%B4-%EC%A0%95%EB%A0%AC%ED%95%98%EA%B8%B0-sort
// Reference
function solution(strings, n) {
  return strings
    .sort((a, b) => (a < b ? -1 : a === b ? 0 : 1))
    .sort((a, b) => (a[n] < b[n] ? -1 : a[n] === b[n] ? 0 : 1));
}
