
const toWeirdCase = (str) => {
    
    return str.split('').map( (letter,index) => {
      if(index%2 !== 0) return letter.toLowerCase();
      else return letter.toUpperCase();

    }).join('');
}

console.log( toWeirdCase("String"));
console.log( toWeirdCase("Weird string case"));


