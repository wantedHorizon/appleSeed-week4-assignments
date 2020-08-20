
const nameToInitials = (str) => {
    
    return str.split(' ').map( word => {
      return word.charAt(0).toUpperCase();
    }).join('.');
}

console.log( nameToInitials("Sam Harris"));
console.log( nameToInitials("Patrick Feeney"));


