function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
  }
  
  sayHi();
  
  /*
  A: Lydia and undefined
  B: Lydia and ReferenceError
  C: ReferenceError and 21
  D: undefined and ReferenceError
  
  Ответ D. 
  name - undefined т.к. переменная хостится вверх, но значение присваиваем ниже.
  age - не хостится вверх, а объявляем после выхова из-за чего получаем ReferenceError
  */