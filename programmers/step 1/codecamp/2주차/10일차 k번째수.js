// 문제 설명
// 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.

// 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면

// array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
// 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
// 2에서 나온 배열의 3번째 숫자는 5입니다.
// 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때, commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.

// 제한사항
// array의 길이는 1 이상 100 이하입니다.
// array의 각 원소는 1 이상 100 이하입니다.
// commands의 길이는 1 이상 50 이하입니다.
// commands의 각 원소는 길이가 3입니다.
// 입출력 예
// array	commands	return
// [1, 5, 2, 6, 3, 7, 4]	[[2, 5, 3], [4, 4, 1], [1, 7, 3]]	[5, 6, 3]
// 입출력 예 설명
// [1, 5, 2, 6, 3, 7, 4]를 2번째부터 5번째까지 자른 후 정렬합니다. [2, 3, 5, 6]의 세 번째 숫자는 5입니다.
// [1, 5, 2, 6, 3, 7, 4]를 4번째부터 4번째까지 자른 후 정렬합니다. [6]의 첫 번째 숫자는 6입니다.
// [1, 5, 2, 6, 3, 7, 4]를 1번째부터 7번째까지 자릅니다. [1, 2, 3, 4, 5, 6, 7]의 세 번째 숫자는 3입니다.

function solution(array, commands) {
  let answer = [];
  let aaa = [];
  for (let i = 0; i < commands.length; i++) {
    aaa = array.slice(commands[i][0] - 1, commands[i][1]);
    aaa.sort((a, b) => {
      return a - b;
    });
    answer.push(aaa[commands[i][2] - 1]);
    // console.log(aaa)
  }
  return answer;
}

// 내 풀이 (20230526)
function solution(array, commands) {
  let answer = [];
  let temp = [];
  for (let i = 0; i < commands.length; i++) {
    const [startIndex, lastIndex, k] = [
      commands[i][0],
      commands[i][1],
      commands[i][2],
    ];
    temp = array.slice(startIndex - 1, lastIndex);
    temp.sort((a, b) => a - b);
    answer.push(temp[k - 1]);
  }
  return answer;
}

// Reference 1

// function solution(array, commands) {
//   let answer = [];
//   for (let idx = 0; idx < commands.length; idx++) {
//     const i = commands[idx][0];
//     const j = commands[idx][1];
//     const k = commands[idx][2];

//     //배열을 자르고 정렬한 함수
//     const sliceResult = array.slice(i - 1, j).sort((a, b) => {
//       return a - b;
//     });
//     answer.push(sliceResult[k - 1]);
//     console.log(sliceResult);
//   }
//   return answer;
// }

// Reference 2

// function solution(array, commands) {
//   const answer = commands.map((el) => {
//     const sliceResult = array.slice(el[0] - 1, el[1]).sort((a, b) => {
//       return a - b;
//     });

//     return sliceResult[el[2] - 1];
//   });
//   return answer;
// }
