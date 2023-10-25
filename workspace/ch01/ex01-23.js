// 함수의 매개변수에 적용
// function fn(a, b, ...rest) {
function fn(a, b, ...rest) {
  console.log(a, b, rest);
}

fn();
fn(1);
fn(2, 3);
fn(4, 5, 6);
fn(7, 8, 9, 10, 11);

// 구조 분해 할당에서 사용

var [first, second, ...rest] = [100, 200, 300, 400, 500];
console.log(first, second, rest);

var user = {
  name: "김도현",
  age: 28,
  phone: "1234",
  address: "서울시",
};

var { name, age, ...etc } = user;
console.log(name, age, etc.phone, etc.address);
