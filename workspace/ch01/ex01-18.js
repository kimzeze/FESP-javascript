var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var sum = arr.reduce((acc, cur) => {
  return acc + cur;
}, 100); // 초기값 100으로 설정, 초기값이 없을 시 1 -> acc(누적값), 2->(현재값)으로 시작한다.

console.log(sum);
