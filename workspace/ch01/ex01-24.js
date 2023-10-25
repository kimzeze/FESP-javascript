// 전개 연산자
var colors = ["two", "three", "four"];
var newColors = ["one", ...colors, "five"];

console.log(newColors, colors === newColors);

if (colors !== newColors) {
  console.log("리렌더링");
}

var user = { name: "김철수", age: 30 };
var newUser = { name: "김철수", age: 30 };

console.log(newUser, user === newUser);
if (user !== newUser) {
  console.log("리렌더링2");
}
// 함수에서 사용

// 배열 결합

// 객체 결합
