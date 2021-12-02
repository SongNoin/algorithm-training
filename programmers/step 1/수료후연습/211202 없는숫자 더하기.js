// https://programmers.co.kr/learn/courses/30/lessons/86051

// 중요포인트
// 1. .reduce는 참 편하다

// 내 풀이
function solution(numbers) {
    var answer = [];
    for (let i = 0 ; i < 10 ; i++){
        if(numbers.includes(i) === false){
            answer.push(i)
        }
    }
    return answer.reduce((a,b) => a+b);
}