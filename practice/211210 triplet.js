function triplets(t, d) {
  d.sort((a, b) => a - b);
  let answer = 0;
  for (let i = 0; i < d.length; i++) {
    for (let j = i + 1; j < d.length; j++) {
      for (let l = j + 1; l < d.length; l++) {
        if (d[i] + d[j] + d[l] >= t) {
          answer++;
        } else break;
      }
    }
  }
  return answer;
}
