"use strict";

//Promise is a Javascript object for asynchronous operation.

//State: pending -> fulfilled or rejected
//Producer vs Consumer



/* -------------------------------- 1.Promise ------------------------------- */


//when new Promise is created, the executor runs automatically.
const promise = new Promise((resolve, reject) => {
  //doing some heavy work (network, read files)
  console.log("doing something ...");
  setTimeout(()=>{
    //성공적으로 기능을 수행했을 때
    // resolve('ellie');
    //네트워크 통신이 끊겼을때
    reject(new Error('no network'));
  },2000);
});


/* ------------ 2. Consumers: then, catch, finally (promise 사용하기) ----------- */

promise
  .then(value => {
  console.log(value); //ellie
  //proomise가 정상적으로 잘 수행이 되어서 최종적으로 resolve라는 콜백함수를 통해서 전달된 값이 이 value의 파라미터로 전달되어 들어온다. 
  //resolve가 아닌 reject를 사용했을땐?
  // > promise.js:21 Uncaught (in promise) Error: no network at promise.js:21:12
})
  .catch(error => {
  console.log(error);
  // > Error: no network at promise.js:21:12
})
  .finally(()=>{
    console.log('finally');
  })


/* --------------------------- 3. Promise chaining -------------------------- */








