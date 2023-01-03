// const user = {
//   name: "tiger",
//   age: 32,
//   address: "서울시 중랑구 면목동",
//   grades: [80, 90, 100],
//   totalGrades: () => {
//     console.log(this);
//   }, //객체 안에 들어있는 함수 = 메소드
// };

// user.totalGrades(); //user의 this인 window

const user = {
  name: "tiger",
  age: 32,
  address: "서울시 중랑구 면목동",
  grades: [80, 90, 100],
  totalGrades: function () {
    const bar = () => {
      console.log("bar : ", this); //this는 user 객체
      //totalGrades()의 this가 user라서 ?
    };

    bar();
  }, //객체 안에 들어있는 함수 = 메소드
};

user.totalGrades();
