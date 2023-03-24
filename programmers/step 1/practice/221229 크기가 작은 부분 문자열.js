function solution(t, p) {
  let answer = 0;
  for (let i = 0; i <= t.length - p.length; i++) {
    let partString = t.slice(i, i + p.length);
    if (Number(partString) <= Number(p)) {
      answer++;
    }
  }
  return answer;
}
