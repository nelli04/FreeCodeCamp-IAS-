function sumFibs(num) {
    let n = 0;
    let z = 1;
    let result = 0;
    while (z <= num) {
      if (z % 2 !==  0) {
        result += z;
      }
      z += n;
      n = z - n;
    }
    return result;
  }
  
  sumFibs(4);