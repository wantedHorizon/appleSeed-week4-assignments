

const binaryToDecimal = (arr) => {
    return arr.reduce((acc,digit,index) => digit ? acc+(2**(arr.length-index-1)): acc,  0);
}

console.log(binaryToDecimal([0,0,0,1]));
console.log(binaryToDecimal([1, 0, 1, 1]));
console.log(binaryToDecimal([1,1,1,1]));


