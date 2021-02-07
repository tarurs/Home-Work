for (var i = 0; i < 3; i++) {
    setTimeout((i) => console.log(i), 1);
  }
  
  for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
  }

  /*
  A: 0 1 2 and 0 1 2
  B: 0 1 2 and 3 3 3
  C: 3 3 3 and 0 1 2

  В первом случае - var. Переменная глобальная и Сеттаймаут станет в очередь, после чего выведет 3 3 3
  Во втором - let. let выведет в это слуае значение по очереди 0 1 2
  */

 for (var i = 0; i < 3; i++) {
    setTimeout(((i) => console.log(i))(i), 1);
  }