// https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one
// 풀이 1
function timeConversion(s) {
  let isAm = s.slice(s.length - 2, s.length) === "AM" ? true : false;
  let clock = s.slice(0, 2);
  if (isAm) {
    if (clock === "12") clock = "00";
    s = clock + s.slice(2, s.length - 2);
  } else {
    if (clock !== "12") clock = Number(clock) + 12;
    s = clock + s.slice(2, s.length - 2);
  }
  return s;
}
