// const MASTER = (function () {
//   //parameter
//   const KEY = "alacs#$@#";
//   //var KEY = "alacs#$@#";

//   //내가 내보내고 싶은 항목들만 내보낼거야
//   //모듈로서의 활용
//   //정보 은닉화 incapsulation: 외부의 접근을 차단
//   //일부 정보만 노출

//   return {
//     getKey: function () {
//       return KEY;
//     },
//   };
// })(); //arguments

// console.log(MASTER.getKey());

// console.log(KEY);







// let value = true; //1) true 2) false
// if(!value) {
//   value = !!value
// } else {
//   value = !value
// }

// console.log(value);

//false
//false

// let count = 0;
// while(count < 5) {
//   let a = 5; //1, 7, 9, 13, 5
//   let b = 17; //10, 8, 5, 3, 17

//   if (a+b > 15) break
//   console.log(a+b);
//   count++;
// }

//11, 15, 14

// let js =1;
// let tutorial = 0;


// do {
//   js++;

//   do{
//     tutorial += 1;
//   } while(tutorial === 0) 

// } while (js++ < 3)

// console.log(js);
// console.log(tutorial);

// for (let i = 2; i < 10; i++){
//   for (let j = 1 ; j < 10; j++){
//     console.log(`${i} * ${j} = ${i*j}`)
//   }
// }


// let obj = {
//   array: [1, 2, 3],
//   foo: function (v, i) {
//     console.log(this, v, i);
//   },
// };

// // 1.
// obj.foo(4, 5);

// // 2.
// [10, 20, 30].forEach(obj.foo);

/* ---------------------------------- 코어 자스 --------------------------------- */
// let obj1 = {
//   name:'obj1',
//   func:function(){
//     console.log(obj1.name);
//   },
//   // this: this
// };

// setTimeout(obj1.func,1000);

// let obj2 = {
//   name:'obj2',
//   func:obj1.func,
//   this:this
// }

// let callback2 = obj2.func();

// // setTimeout(callback2, 1500);

// let obj3 = {
//   name:'obj3'
// };
// let callback3 = obj1.func.call(obj3);
// setTimeout(callback3, 2000)


var obj1 = {
    name: 'obj1',
    func: function () {
        var self = this;
        return function () {
            console.log(self.name);
        };
    }
};
var callback = obj1.func();
setTimeout(callback, 1000);


var obj2 = {
    name: 'obj2',
    func: obj1.func,
    //obj2.func()까지는 메소드 그 안에 있는 obj1.func이 콜백함수
    // func에도 함수가 들어있으니까 self 해서 obj2가 출력되는 것
};


var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
//obj3 자체는 애초에 func를 복제하지 않고 obj1거를 갖다쓰는데 그냥 bind 해서 객체를 obj3으로 지정해준거다
setTimeout(callback3, 2000);


//resolve나 reject 중에 먼저 나온게 실행되고 뒤는 실행안됨.

let promise = new Promise(function(resolve, reject) {
  // resolve("완료");
  reject(new Error("에러임")); 
  setTimeout(() => resolve("시간지남")); 
});

console.log(promise);


// /* ---------------------------- await은 어디에 붙여야할까? --------------------------- */

// async function f() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("완료!"), 1000);
//   });

//   let result = promise;

//   console.log(result); // "완료!"
// }

// f();

//정답은 let result = await promise;
//셑타임아웃자체가 비동기적으로 일어나야하는 함수이기 때문에 그 앞에 await을 붙여야 비동기적으로 일어날수있다 그래야 마지막 콘솔에 값이 찍힐 수 있따


/* ----------------------------------- 숙제 ----------------------------------- */

//then을 await으로 고치기
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     })
// }

// loadJson('no-such-user.json')
//   .catch(console.log); 
