const shape = {
    radius: 10,
    diameter() {
      return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
  };


  shape.diameter();
  shape.perimeter();

  /*
  A: 20 и 62.83185307179586
  B: 20 и NaN
  C: 20 и 63
  D: NaN и 63
  */

  /*
  Answer: B: 20 and NaN

  The diameter function returned 20, because this.radius pointed on local scope.
  The perimeter - returned nan, because 6.28 trying to multiple on Undefined 
  (this.radius = undefined, because arrow function pointed on global scope window)
  */