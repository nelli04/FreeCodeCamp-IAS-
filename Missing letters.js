function fearNotLetter(str) {
    for (let i = 0; i < str.length; i++) {
      const x = str.charCodeAt(i)
    if (x !== str.charCodeAt(0) + i) {
      return String.fromCharCode(x - 1)
      }
    }
    return undefined;
  }
  
  fearNotLetter("abce");