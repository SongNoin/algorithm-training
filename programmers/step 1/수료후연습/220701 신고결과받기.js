// https://programmers.co.kr/learn/courses/30/lessons/92334

// 중요포인트
// 1. 배열에서 중복을 제거하는 함수
//   let newArr = [...new Set(arr)]
// 2. filter() 로 특정값 찾기
//   arr.filter(x => x === "특정 값").length  특정값 갯수

function solution(id_list, report, k) {
    let realReport = [...new Set(report)];
    let arr = [];
    let bann_list = [];
    let answer = [];
    for (let j = 0; j < id_list.length; j++) {
      answer.push(0);
    }
    for (let i = 0; i < realReport.length; i++) {
      arr.push(realReport[i].split(' ')[1]);
    }
    for (let l = 0; l < id_list.length; l++) {
      if (arr.filter(x => x === id_list[l]).length >= k) bann_list.push(id_list[l]);
    }
    for (let k = 0; k < realReport.length; k++) {
      if (bann_list.includes(realReport[k].split(' ')[1])) {
        answer[id_list.indexOf(realReport[k].split(' ')[0])] =
          answer[id_list.indexOf(realReport[k].split(' ')[0])] + 1;
      }
    }
    return answer;
}