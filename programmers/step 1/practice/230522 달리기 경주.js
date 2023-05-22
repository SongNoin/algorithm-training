// https://school.programmers.co.kr/learn/courses/30/lessons/178871
// 중요포인트
// 1. for안에 indexOf를 사용하였더니 O^2 시간이 걸려서 map으로 풀었다.

// 내 풀이 (정답)
function solution(players, callings) {
  const playerMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i);
  }

  for (let i = 0; i < callings.length; i++) {
    const playerIndex = playerMap.get(callings[i]);
    const player = players[playerIndex];
    const changePlayer = players[playerIndex - 1];
    players[playerIndex] = changePlayer;
    players[playerIndex - 1] = player;
    playerMap.set(player, playerIndex - 1);
    playerMap.set(changePlayer, playerIndex);
  }

  return players;
}

// 내풀이 2 (시간초과)
function solution(players, callings) {
  for (let i = 0; i < callings.length; i++) {
    const playerIndex = players.indexOf(callings[i]);
    const player = players[playerIndex];
    const changePlayer = players[playerIndex - 1];
    players[playerIndex] = changePlayer;
    players[playerIndex - 1] = player;
  }
  return players;
}
