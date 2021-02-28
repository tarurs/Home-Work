+true;
!"Lydia";

/*
A: 1 and false
B: false and NaN
C: false and false
*/

/*
Answer: A: 1 and false

operator "+" convert value to Number. True - 1
operator "!" turned over value. True - turned to false, and false turned to true. In this case - string length not equal zero. In other words:
string = !true = false
*/