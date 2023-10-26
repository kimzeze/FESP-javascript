console.log(Math.min(10, 100)); // 10
console.log(Math.min(200, 100, 50, 60, 80, 30)); //30
console.log(Math.min(100, 20, 60, 50, 70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
function smallest(nums) {
  var min = arguments[0]; // 'num'이 아닌 'nums'를 사용해야 합니다.
  for (var i = 1; i < arguments.length; i++) {
    // 'var i'를 선언하고 'nums' 배열의 길이보다 작을 때까지 반복해야 합니다.
    if (min > arguments[i]) {
      min = arguments[i];
    }
  }
  return min;
}

console.log(smallest([10, 100])); // 10
console.log(smallest([200, 100, 50, 60, 80, 30])); //30
console.log(smallest(100, 20, 60, 50, 70)); // 20
