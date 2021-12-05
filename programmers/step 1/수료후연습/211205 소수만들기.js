// https://programmers.co.kr/learn/courses/30/lessons/12977

// 중요포인트
// 1. for를 가장 많이 써본 문제..ㅜ 이렇게 하는게 맞나 => 다른사람풀이보니까 다들 for문을 왕창썼다 맞나보다
// 2. 풀이에는 필요가없었지만 Set이라는 매써드를 알게되었다.
// let newArr = Array.from(new Set(arr)); 이러면 arr 배열의 중복이 제거된다. 앞으로 쓰일것 같다.
// 3. 숫자가 소수인지 판별하는 함수는 for문을 썼다. Math.sqrt()로 판별하는 에라토스테네스의 체라는 방법도 있는 것 같다
// for(let i=2;i<=Math.sqrt(n);i++){
//     if(n%i == 0){
//         return false;
//     }
// }

// 내 풀이

function solution(nums) {
  let adds = [];
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let l = j + 1; l < nums.length; l++) {
        adds.push(nums[i] + nums[j] + nums[l]);
      }
    }
  }
  for (let k = 0; k < adds.length; k++) {
    for (let n = 2; n < adds[k]; n++) {
      if (adds[k] % n === 0) {
        answer++;
        break;
      }
    }
  }
  return adds.length - answer;
}
