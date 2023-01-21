'use strict';

//JavaScript is synchronous
//자바스크립트는 동기적이다.
//바로 호이스팅된 이후부터 코드가 우리가 작성한 순서에 맞춰서 하나하나씩 동기적으로 실행된다는 말. 
//호이스팅 > var변수와 함수선언들이 자동적으로 제일 위로 올라가는 것.

// >> 호이스팅이 된 이후부터 코드가 나타나는 순서대로 자동적으로 실행이 된다.

console.log('1');
console.log('2');
console.log('3');

// > 정해진 순서에 맞게 코드가 실행됨. (>> 1, 2, 3)

//asynchronous
//비동기적. 언제 코드가 실행될지 예측할 수 없다.
//정말 좋은 예로는 setTimeout()이라는 웹api임.
// > 우리가 지정한 시간이 지나면 우리가 전달한 콜백함수를 호출하는 것.
// 콜백함수 = 우리가 전달해준 함수를 나중에 불러줘.
// setTimeout은 time handler라는 콜백함수를 전달해주고
// 타이머, 어느정도 시간을 타임아웃할건지 시간을 정해주는 인자들이 있음.

console.log('1');
setTimeout(() => {
    console.log('2');
}, 1000);
console.log('3');
//그래서 우리는 아 우리가 콜백함수를 지정해줄수있고, 1000ms가 1초니까 1초가 지나면 우리가 전달한 이 함수가 실행되는구나 = 일초가 지나면 콘솔로그를 출력하는 함수

// 출력 결과 '1' -> '3' -> '2'
// 자바스크립트 엔진은 코드를 위에서 부터 밑으로 실행함.
// 1 출력 뒤 setTimeout은 브라우저 api니까 브라우저에게 1초 뒤 실행해달라고 요청함. 브라우저 api는 무조건 브라우저한테 먼저 요청을 보내게됨. 응답을 기다리지 않고 바로 콘솔로그로 넘어가게 됨. 그래서 3을 출력함. 1초가 지난 뒤 2를 출력함.
// 이것이 비동기적인 실행방법임.

//콜백도 두가지로 나눠짐
//동기적 콜백, 비동기적 콜백


/* -------------------------------------------------------------------------- */
/*                            Synchronous callback                            */
/* -------------------------------------------------------------------------- */
function printImmediately(print) {
  print();
}

printImmediately(() => console.log('hello')); //hello
//위에 setTimeout으로 실행한 '2'가 'hello' 뒤에서 출력됨.


/* -------------------------------------------------------------------------- */
/*                            Asynchronous callback                           */
/* -------------------------------------------------------------------------- */

function printWithDelay(print, timeout) {
  //setTimeout을 래핑하는 함수
  setTimeout(print, timeout);
}

printWithDelay(()=>console.log('async callback'), 2000);
// 1 > 3 > hello > 2 > async callback


console.clear();

/* -------------------------------------------------------------------------- */
/*                            Callback Hell example                           */
/* -------------------------------------------------------------------------- */

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'ellie' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'ellie') {
        onSuccess({ name: 'ellie', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// 1. id, pass 입력받기
// 2. login 하기
// 3. 로그인 이후 받아온 id의 roles 받아오고
// 4. 역할이 있다면, 이름과 역할을 출력


const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

userStorage.loginUser(
  id,
  password, 
  user => {
  userStorage.getRoles(
    user, 
    userWithRole => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`)
    }, 
    error => {
      console.log(error);
    }
  );
}, 
error => {
  console.log(error)
  }
);

//콜백 체인의 문제점
//- 가독성이 너무 떨어짐.
