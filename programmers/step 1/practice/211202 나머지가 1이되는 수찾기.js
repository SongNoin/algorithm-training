// https://programmers.co.kr/learn/courses/30/lessons/87389

// 내 풀이

function solution(n) {
    for (let i = 1 ; i < n ; i ++){
        if (n % i === 1) return i
    }
}