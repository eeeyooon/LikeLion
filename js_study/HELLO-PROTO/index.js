function 거듭제곱(왼쪽값 = 1, 오른쪽값 = 2) {
  return 왼쪽값 ** 오른쪽값
}

// 프로토타입 확장
Number.prototype.거듭제곱 = function (오른쪽값 = 2) {
  // 이곳의 this 는 Number 변수(=인스턴스)
  // debugger
  return this.valueOf() ** 오른쪽값
}

// 클래스 확장
class MyNumber extends Number {
  거듭제곱(오른쪽값 = 2) {
      return this.valueOf() ** 오른쪽값
  }
}

const a = 2
a.console.log(a.거듭제곱(2))
console.log(a.거듭제곱(3))
console.log(a.거듭제곱(4))

console.log(new Number(2).valueOf() === 2)