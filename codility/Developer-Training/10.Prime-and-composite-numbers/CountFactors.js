// https://app.codility.com/demo/results/trainingRGSS3G-4ZW/
// 풀이 (78점)
// 내가 생각한 최선의 효율이 나오는 코드 N 절반이상의 값의 약수는 N 본인 밖에 없으므로 절반에서 끊어준다.
function solution(N) {
  let answer = 1;
  for (let i = 1; i <= N / 2; i++) {
    if (N % i === 0) answer++;
  }
  return answer;
}

// Ref (100점)
// 만약 Math.sqrt(N)이 정수라면, Math.sqrt(N)가 N의 약수가 되며, 나머지 약수들은 Math.sqrt(N)을 기준으로 앞 뒤로 짝을 이루고 있다.
// 따라서 Math.sqrt(N)(= N의 제곱근)을 기준으로 약수의 개수를 구한 후, 그 개수에 *2를 해준다. 그리고 Math.sqrt(N)이 정수라면 Math.sqrt(N)자체가 N의 약수가 되기 때문에 +1을 해주는 방법이다.
function solution(N) {
  if (N === 1) return 1;

  let factorCnt = 1;

  for (let i = 2; i < Math.sqrt(N); i++) {
    if (N % i === 0) {
      factorCnt++;
    }
  }

  factorCnt = factorCnt * 2;

  if (Math.sqrt(N) % 1 === 0) factorCnt++;

  return factorCnt;
}
