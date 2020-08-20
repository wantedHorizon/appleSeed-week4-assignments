
const findNextSquare = (n) => {
    let root = Math.sqrt(n);
    if(root%1 === 0){
        return (root+1)**2
    }

    return -1;
}


console.log("findNextSquare(121)=>",findNextSquare(121));
console.log("findNextSquare(625)=>",findNextSquare(625));
console.log("findNextSquare(114)=>",findNextSquare(114));
