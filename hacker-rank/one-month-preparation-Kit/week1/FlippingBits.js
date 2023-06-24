// https://www.hackerrank.com/challenges/one-month-preparation-kit-flipping-bits/problem?h_l=interview&isFullScreen=true&playlist_slugs%5B%5D%5B%5D=preparation-kits&playlist_slugs%5B%5D%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D%5B%5D=one-month-week-one

// 풀이
// 32비트이니 2를 32제곱해주고 n에 1만큼 빼주었다.
function flippingBits(n) {
  return 2 ** 32 - 1 - n;
}
