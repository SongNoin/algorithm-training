function solution(s) {
  const sentenceArr = s.split(" ");

  for (let i = 0; i < sentenceArr.length; i++) {
    if (sentenceArr[i][0])
      sentenceArr[i] =
        sentenceArr[i][0].toUpperCase() +
        sentenceArr[i].substr(1).toLowerCase();
  }
  return sentenceArr.join(" ");
}
