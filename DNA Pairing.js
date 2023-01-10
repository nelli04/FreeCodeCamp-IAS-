function pairElement(str) {
    const pair = {
      A: 'T',
      T: 'A',
      C: 'G',
      G: 'C'
    }
    return str
    .split('')
    .map(x => [x, pair[x]])
  }
  
  pairElement("GCG");