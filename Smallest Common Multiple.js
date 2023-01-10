function smallestCommons(arr) {
    const [min, max] = arr.sort((a, b) => a - b)
    const x = Array(max - min + 1)
    .fill(0)
    .map((_, i) => i + min)
    const y = x.reduce((a, b) => a * b)
    for (let z = max; z <= y; z += max) {
      const n = x.every((value) => z % value === 0)
      if (n) {
        return z;
      }
    }
  }
  
  smallestCommons([1,5]);