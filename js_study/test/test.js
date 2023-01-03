const MASTER = (function () {
  //parameter
  const KEY = "alacs#$@#";
  //var KEY = "alacs#$@#";

  //내가 내보내고 싶은 항목들만 내보낼거야
  //모듈로서의 활용
  //정보 은닉화 incapsulation: 외부의 접근을 차단
  //일부 정보만 노출

  return {
    getKey: function () {
      return KEY;
    },
  };
})(); //arguments

console.log(MASTER.getKey());

console.log(KEY);
