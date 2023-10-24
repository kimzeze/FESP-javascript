// 10 + 100의 결과를 출력한다.
function add() {
  console.log(10 + 100);
}

// 전달받은 숫자와 100의 합계를 출력한다.
function add100(n1) {
  console.log(n1 + 100);
}

// 전달받은 두 수의 합계를 출력한다.
function sum(n1, n2) {
  console.log(n1 + n2);
}

// 전달받은 두 수의 합계를 반환한다.
function sum2(n1, n2) {
  return n1 + n2;
}

add();
add();
add100(20);
add100(30);
sum(30, 40);
sum(30, 40);
console.log(sum2(40, 50));
