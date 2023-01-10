function sumPrimes(num) {
    let x = [];
    for (let i = 2; i <= num; i++) {
      if (x.every((xs) => i % xs !== 0)) 
        x.push(i);
      
    }
    return x.reduce((sum, xs) => sum + xs, 0)
  }
  
  sumPrimes(10);