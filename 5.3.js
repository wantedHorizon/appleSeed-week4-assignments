
const toCamelCase = (str) => {
    
    return str.split(/-|_/).map( (word,index) => {
        if(index >0){
            let out =word.split('');
            out[0] = out[0].toUpperCase();
            return out.join('');
        } else {
            return word;
        }
    }).join('');
}

console.log( toCamelCase("the-stealth-warrior"));
console.log( toCamelCase("The-stealth-warrior"));


console.log( toCamelCase("The_Stealth_Warrior"));
console.log( toCamelCase("the_Stealth_Warrior"));
