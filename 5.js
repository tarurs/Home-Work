const bird = {
    size: 'small',
  };
  
  const mouse = {
    name: 'Mickey',
    small: true,
  };

  /*
  A: mouse.bird.size is not valid
  B: mouse[bird.size] is not valid
  C: mouse[bird["size"]] is not valid
  D: All of them are valid
*/

/*
Answer: A: mouse.bird.size is not valid

In this case we trying to receive size value from mouse object from bird key. In mouse obj - key "bird" does not exist.
Other cases are valid
*/