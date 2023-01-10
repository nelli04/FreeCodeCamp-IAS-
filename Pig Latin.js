function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) 
    return str + 'way';
    const x = str.match(/^[^aeiou]+/)[0];
    return str.substring(x.length) + x + 'ay'
   }
   
   translatePigLatin("consonant");