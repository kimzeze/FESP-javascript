// 큐(queue) -> FIFO 먼저 들어간애가 먼저 나온다
// 스택(stack) -> FILO 먼저 들어간애가 가장 나중에 나온다

// 100, 200, 300 저장
// 300,200,100 순으로 출력
var stack = [];
stack.push(100, 200, 300);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack);

// 100, 200, 300 저장
// 100, 200, 300 순으로 출력
var queue = [];
queue.push(100, 200, 300);
console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

console.log(queue);
