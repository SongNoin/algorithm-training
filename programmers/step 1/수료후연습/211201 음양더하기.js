// https://programmers.co.kr/learn/courses/30/lessons/76501

// 중요포인트
// 1. .reduce(함수 , 최초인자) 를 통해 배열의 값을 모두 합해주었다.
// 2. reducer라는 함수를 만들어주었다. 이전값 + 현재값 (더 많은 응용을 해봐야 할 것 같다.)


// 내 풀이

function solution(absolutes, signs) {
    let arr = []
    let reducer = (prev, curr) => prev + curr
    for (let i =0 ; i <absolutes.length ; i++){
        if (signs[i] === false){
            arr.push(-absolutes[i])
        } else {
            arr.push(absolutes[i])
        }
    }
    return arr.reduce(reducer);
}