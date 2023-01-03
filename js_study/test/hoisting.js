// function a() {
//   console.log(b); //b함수

//   var b = "bbb";
//   console.log(b); //bbb

//   function b() {}

//   console.log(b); //bbb
// }

// a();

// function a() {
//   console.log(b); //undefined

//   var b = "bbb";
//   console.log(b); //bbb

//   var b = function b() {};
//   console.log(b); //b함수
// }

// a();

// function var_test() {
//   console.log(x); //undefined
//   var x = 1;
//   console.log(x); //1
//   var x;
//   console.log(x); //1
//   var x = 2;
//   console.log(x); //2
// }

// var_test();

// function let_test() {
//   console.log(x);
//   let x = 1;
//   console.log(x);
//   console.log(x);
//   x = 2;
//   console.log(x);
// }

// let_test();

// function a() {
//   var x;
//   var x;
//   var x;

//   x = 1;
//   console.log(x); //1
//   console.log(x); //1
//   x = 2;
//   console.log(x); //2
// }

// a();

// var a = 1;
// var outer = function () {
//   var inner = function () {
//     console.log(a);
//     // var a = 3;
//   };
//   inner();
//   console.log(a);
// };

// outer();
// console.log(a);

// let n = 0;

// if (n > 0) {
//   console.log(1);
// } else if (n <= 0) {
//   console.log(-1);
// } else {
//   console.log("입력안함");
// }

// let count = prompt("please write number");
// let i = 1;
// do {
//   if (count < 0 || !count) {
//     console.log("최초");
//     break;
//   }

//   console.log(i);
//   i++;
// } while (i != count);

const user = {
  name: "tiger",
  age: 32,
};

function hello() {
  console.log(this);
}

hello.call(user);
