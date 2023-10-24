var foo = {
  name: "lee",
  age: 30,
  job: "developer",
  married: false,
};

console.log(foo["name"], foo.age, foo.job, foo["married"]);
console.log(typeof foo, foo);

var strFoo = JSON.stringify(foo); // JSON.stringify -> 스토리지에 보낼 떄 객체를 문자열화 시켜줘야한다.
console.log(typeof strFoo, strFoo);

var objFoo = JSON.parse(strFoo); // JSON.parse -> 스토리지에 있는걸 가져와서 처리할 때
console.log(objFoo);
console.log(typeof objFoo, objFoo);
