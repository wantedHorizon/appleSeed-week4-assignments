const tribonacci = (signature,n) => {
    let a= signature[2], b=signature[1], c=signature[0], temp;
    arr= [];
    while( n > 0) {
        arr.push(c);

        temp =a ;
        a= a+b+c;
        c=b;
        b=temp ;
        n--;

    }
    return arr;
} 

console.log(tribonacci([0,0,1],8));
console.log(tribonacci([1,1,1],8));
