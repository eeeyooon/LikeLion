/* ---------------------------------- 질문 4 ---------------------------------- */
let list = [
  "01. 들어가며",
  "02. js의 역사",
  "03. 자료형",
  "04. 함수",
  "05. 배열",
];

let newList = [];
for (i = 0; i < list.length; i++) {
  newList.push(list[i].slice(4));
}

//for..of 사용했을때
let strList = [];
for (let str of list) {
  strList.push(str.slice(4));
}

// console.log(newList);
// console.log(strList);

/* ---------------------------------- 질문 5 ---------------------------------- */
/*
function hasCola(str) {
  if (str.indexOf("콜라") > -1) {
    console.log("금지어가 포함되어 있습니다.");
  } else {
    console.log("통과");
  }
}
*/

// hasCola("사이다가 짱짱"); // "통과"
// hasCola("코카콜라 넘사벽"); // "금지어가 포함되어 있습니다."
// hasCola("콜라"); // "금지어가 포함되어 있습니다."

/*
let str1 = "코카콜라 넘사벽";
let str2 = "콜라";
console.log(str1.indexOf("콜라")); //2
console.log(str2.indexOf("콜라")); //0
*/

//indexOf(’콜라’)가 -1 보다 크면 true 라고 하면 0도 같이 true가 되는건가요?
//조건문에 0은 false라는 것은 무시가 되는건지 궁금합니다

//질문이 이해가 안되는...
//if ( 0 > -1) -> true로 반환됨...

// let result = 0;

// if (result === 0) {
//   result += 1; //result = 1
//   if(result>0) {
//     result = result-result-result; //-1
//   } 
//   if(result > 0) {
//     result = 2;
//   } else if (result++ === 0) { //이때 result는 0이 됨.
//     result = result * 1; 
//   } else { //result = -1이니까
//     result = '안녕';
//   }
// }

// if (result < 0) {
//   result = '사자';
// }
// console.log(result);

function a(x) {
  var x;
  console.log(x);
  console.log(x);
  var x = 2;
  console.log(x);
}
a(1);


function sayHi() {
  alert("Hello");
}

let func = sayHi;

// func();
// sayHi();



function bar() {
  console.log( "bar..." );
}

bar.a = 5;
console.log( bar.a );   // 5


bar.prototype.a = 4;
console.log( bar.a );  // 5

var obj = new bar();   // bar...
console.log( obj.a );  // 4

//bar.a와 bar.prototype.a 가 둘 다 생성
//new를 사용해서 만들면 bar()의 프로토타입을 참조함.


/*

함수 객체 내부에 임의로 변수 a를 생성해서 넣어준것

1. 함수를 정의하면 함수와 함께 prototype Object도 생성된다.

2. bar.a는 bar() 함수에 생성된거고, bar.prototype.a는 prototype Object에 만들어진 것임. (별개)

3. obj는 bar()를 통해 생성된 객체라서 bar()의 프로토타입을 참조한다.

4.그래서 obj는 bar()의 prototype에 접근하여 obj.a를 하면 bar.prototype.a의 값을 가져옴.

*/