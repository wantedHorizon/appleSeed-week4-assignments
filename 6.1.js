const accum = (str) => {
 
    return str.split('')
        .map((c, index) => c.toUpperCase() + c.toLowerCase().repeat(index))
        .join('-');
}

console.log( accum("abcd") );
console.log(accum("RqaEzty")  );
console.log( accum("cwAt"));
