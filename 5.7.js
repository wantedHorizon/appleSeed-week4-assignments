
const shortestWord = (str) => {


    return str.split(/\s+/)
    .reduce((acc,word)=> Math.min(word.length, acc), Infinity  );
}

console.log(shortestWord("The main story is not     big deal") );