// https://school.programmers.co.kr/learn/courses/13213/lessons/91081#
// 첫 레벨 3문제를 풀어서 좋았다

// 내 풀이 1
function solution(genres, plays) {
  const songObjs = [];
  const genreCnt = {};
  for (let i = 0; i < genres.length; i++) {
    songObjs[i] = {
      genre: genres[i],
      play: plays[i],
      num: i,
    };
  }
  // 장르 총 재생수 계산
  songObjs.forEach((x) => {
    genreCnt[x["genre"]] = (genreCnt[x["genre"]] || 0) + x["play"];
  });
  // 장르 총 재생수 추가
  for (let j = 0; j < genres.length; j++) {
    songObjs[j]["genrePlayCnt"] = genreCnt[songObjs[j]["genre"]];
  }
  // 고유번호 낮은 순으로 정렬
  songObjs.sort(function (a, b) {
    return a["num"] - b["num"];
  });
  // 각 노래 재생수로 정렬
  songObjs.sort(function (a, b) {
    return b["play"] - a["play"];
  });
  // 많이 재생된 장르 순서대로 정렬
  songObjs.sort(function (a, b) {
    return b["genrePlayCnt"] - a["genrePlayCnt"];
  });
  // 2개만 담기
  const albumList = [];
  let prevGenre = "";
  let cnt = 0;
  songObjs.forEach((element) => {
    if (prevGenre === element["genre"]) {
      if (cnt < 1) {
        albumList.push(element);
        cnt++;
      }
    } else {
      albumList.push(element);
      cnt = 0;
    }

    prevGenre = element["genre"];
  });
  // 최종 고유넘버만 담기
  const albumNumList = [];
  for (const el of albumList) albumNumList.push(el["num"]);

  return albumNumList;
}

// Ref (강의 해답 코드)
// Map 을 사용하여 내가 했던 길고 복잡한 매써드들을 간단하고 가독성이 좋게 짜여있다
// Map을 단순히 배열과 비슷한 자료구조라고 생각했는데 다양한 고차함수들과 활용하는 것을 보고 다른 해시문제에서 사용해보고 싶다

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((song) => song.index);
}
