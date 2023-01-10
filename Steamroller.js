function steamrollArray(arr) {
    const x = [].concat(...arr);
    return x.some(Array.isArray) ? steamrollArray(x) : x;
  }
  
  steamrollArray([1, [2], [3, [[4]]]]);