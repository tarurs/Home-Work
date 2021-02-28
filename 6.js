let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

/*
A: Hello
B: Hey!
C: undefined
D: ReferenceError
E: TypeError
*/

/*
Answer: A: Hello

In this case we copy "C" obj into "D" obj by link.
All changes in "C" obj will be visible in "D" obj, because both of them pointed on same value
*/