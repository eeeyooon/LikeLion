

let woong = [5, 6, 7, 9, 12, 15];

let total = 0;

let result = [];

// for (let n of woong) {
//   total += n;
// }

//woong.map(n => total += n);

//  woong.filter(n => n%2 === 1).map(n => total += n);

// for (let n of woong) {
//   if (n % 2 === 1) {
//     total += n;
//   }
// }

for (let i=0; i < woong.length-1; i++) {
  result.push(woong[i] * woong[i+1]);
}

console.log(result);