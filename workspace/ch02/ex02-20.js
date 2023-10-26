var todoList = [
  {
    _id: 1,
    title: "Javascript 공부",
    done: true,
  },
  {
    _id: 2,
    title: "Typescript 공부",
    done: false,
  },
  {
    _id: 3,
    title: "React 공부",
    done: false,
  },
  {
    _id: 4,
    title: "React 프로젝트",
    done: true,
  },
];

// 완료된 할일 목록
var doneList = [];
for (let i = 0; i < todoList.length; i++) {
  todoList[i].done === true ? doneList.push(todoList[i].title) : null;
}
console.log("완료된 할일 목록", doneList);

// 남은 할일 목록
var remainList = [];
for (let i = 0; i < todoList.length; i++) {
  todoList[i].done === false ? remainList.push(todoList[i].title) : null;
}
console.log("남은 할일 목록", remainList);

// 남은 할일 수
var remainCount = 0;
for (let i = 0; i < todoList.length; i++) {
  todoList[i].done === false ? remainCount++ : null;
}
console.log("남은 할일 수", remainCount);

// _id=2인 할일
var todo = {};
for (let i = 0; i < todoList.length; i++) {
  todoList[i]._id === 2 ? (todo = todoList[i].title) : null;
}
console.log("_id=2인 할일", todo);

// _id=3인 할일의 index
var todoIndex = 0;
for (let i = 0; i < todoList.length; i++) {
  todoList[i]._id === 3 ? (todoIndex = i) : null;
}
console.log("_id=3인 할일의 index", todoIndex);

// 남은 할일이 하나라도 있는가?
var hasTodo = false;
for (let i = 0; i < todoList.length; i++) {
  todoList[i].done === true ? (hasTodo = true) : null;
}
console.log("남은 할일이 하나라도 있는가?", hasTodo);

// 할일이 모두 완료 되었는가?
var busy = true;
for (let i = 0; i < todoList.length; i++) {
  todoList[i].done === false ? (busy = false) : null;
}
console.log("할일이 모두 완료 되었는가?", busy);
