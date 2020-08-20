const maskify = (str) => {
    if(str.length> 4){
        return str.split('')
        .map( (letter,index) => index< str.length -4 ? '#' : letter )
        .join('');
    }
    return str;
} 


console.log( maskify("4556364607935616") );
console.log( maskify("64607935616") );
console.log( maskify("1") );
console.log( maskify("") );
console.log( maskify("Skippy") );
console.log( maskify("Nananananananananananananananana Batman!") );
