let a = 3;
let b = new Number(3);
let c = 3;

console.log(a == b);
console.log(a === b);
console.log(b === c);

/*
A: true false true
B: false false true
C: true false false
D: false true true
*/

/*
Answer: C: true false false

- console.log (a == b) - true, because operator "==" - it's type conversion. Compared only values;
- console.log (a === b) - false, because "new Number (3)" create new object with value 3.
     Operator "===" compared value and type. In this case: a = number 3, and b = object with value 3;
- console.log (b === c) - false. Same case like previous, when number compared with object without type conversion
*/