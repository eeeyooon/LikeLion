
//JSON
//JavaScript Object Notation

//1. Object to JSON
//JSON.stringify(obj)

//boolean
let json = JSON.stringify(true);
console.log(json); //true


//string
json = JSON.stringify(['apple', 'banana']);
console.log(json); //["apple","banana"] > json의 규격 사항 ("")

//Object
const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  jump: () => {
    console.log(`${name} can jump!`);
  },
};

json = JSON.stringify(rabbit);
console.log(json);

//{"name":"tori","color":"white","size":null,"birthDate":"2023-01-21T05:20:28.752Z"}
// date라는 object가 string으로 바뀜.
// jump 함수는 object의 데이터가 아니라서, JSON에 제외됨.
// 심볼 역시 JSON에 포함되지 않음. 



//원하는 프로퍼티 이름만 전달 가능
json = JSON.stringify(rabbit, ['name', 'color']);
console.log(json);
//{"name":"tori","color":"white"}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return value;
})
console.log(json);
//모든 key와 value들이 콜백함수에 전달됨.
//젤 처음으로 전달되는 것은 토끼의 object를 싸고있는 젤 최상위임.
//> key: , value: [object Object]
//그 뒤부터 키와 벨류들이 전달됨.


json = JSON.stringify(rabbit, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'name' ? 'ellie' : value;
})
//만약 key가 name이라는 것이 들어오게 되면 무조건 ellie로 전달하고,
//key가 name이 아닌 경우에는 원래 벨류를 써야지하고 설정하게 되면 이렇게 엘리로 변환되는 걸 볼 수 있음.
console.log(json);
//{"name":"ellie","color":"white","size":null,"birthDate":"2023-01-21T12:07:47.338Z"}


//이렇게 세밀하게 통제하고 싶을 땐 콜백함수를 사용할 수 있음.


//2. JSON to Object
//JSON.parse(json)


console.clear();

json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);

// console.log(obj);

//{name: 'tori', color: 'white', size: null, birthDate: '2023-01-21T12:09:27.498Z'}

rabbit.jump(); // can jump!

//우리가 변환한 옵젝트는 시리얼라즈이가된, 즉 스트링으로 만들어진 제이슨으로부터 다시 오브젝트를 만들었기 때문에 함수는 시리얼라이즈될 때 포함이 되지 않았죠? 그래서 우리가 다시 제이슨으로부트 오브젝트를 만든것에는 점프라는 api가 없어요. 그래서 점프를 출력하려고 하면 에러가 발생함.

// obj.jump(); //error

//우리가 토끼라는 오브젝트를 제이슨으로 변환할 때는 이 함수가 전혀 포함되지 않앗음. 이렇게 데이터들만 제이슨으로 갓다가 다시 제이슨을 오브젝트로 변환했으니가 이 점프라는 메서드는 포함이 되지 않았기 때문에 이 오브젝트에는 점프라는 기능이 없음. 이점을 유의해야함.

//한가지더 중요한 포인트는 아까 토끼에는 벌쓰데이트라는 오브젝트가 있었는데 이것은 데이트라는 오브젝트임 그래서 데이트라는 , 데이트안에존재하는 api를 사용할 수 있는데 얘를 출력하면 이렇게 21이라는 숫자가 나오는데

console.log(rabbit.birthDate.getDate()); //21

//반대뢔 우리가 제이슨으로 부터 만든 오브젝트에 벌스데이트를 출력하면 에러가 발사ㅐㅇ함. 


// console.log(obj.birthDate.getDate()); //error

//왜냐 이 벌스데이트는 스트링이기 ㄸ문. 우리가 제이슨으로 만든 그 데이터자체에 있는 스트링이 오브젝트에 할당이 된것. 

const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return key === 'birthDate' ? new Date(value) : value;
})

console.log(obj);
console.log(obj.birthDate.getDate()); //21










