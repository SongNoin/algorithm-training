const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, 'example.txt');
// 백준 입력 시 filePath 대신 '/dev/stdin' 사용

let input

// 한 줄에 공백으로 값이 들어올 때
input = fs.readFileSync(filePath).toString().trim().split(' ');
const a = parseInt(input[0]);
const b = parseInt(input[1]);
console.log(a + b);

// 한 줄에 하나씩 값이 들어올 때 (여러 줄로 입력값이 나열되어 있을 때)
// input = fs.readFileSync(filePath).toString().trim().split('\n');

// 첫 번째 줄에 자연수 n을 입력받고, 그 다음줄에 공백으로 구분된 n개의 값들을 입력받을 때
// input = fs.readFileSync(filePath).toString().trim().split(/\s/);
// const [n,...arr] = input;
// parseInt로 입력값을 정수로 만들고 싶을 경우
// const [n,...arr] = input.map(v => parseInt(v));

