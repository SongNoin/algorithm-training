// https://app.codility.com/demo/results/trainingHXM89J-75B/

// 내 풀이 1 (66점)
// O(N^2)
// timeout error

function solution(A) {
  const temp = [];
  for (let i = 0; i < A.length; i++) {
    if (temp.includes(A[i])) {
      temp.splice(temp.indexOf(A[i]), 1);
    } else {
      temp.push(A[i]);
    }
  }
  return Number(temp[0]);
}

// 내 풀이 2 (100점)
// O(N)

function solution(A) {
  A.sort((a, b) => a - b);
  let temp = [A[0]];
  for (let i = 1; i < A.length; i++) {
    if (temp[0] === A[i]) temp.pop();
    else if (temp.length === 0) temp.push(A[i]);
    else return temp[0];
  }
  return temp[0];
}
