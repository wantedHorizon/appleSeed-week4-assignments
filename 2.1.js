const find2Min = (arr) => {

    let min2 = Infinity,
        min = arr[0];
     //find 2 min    
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min2 = min;
            min = arr[i];
        } else if (arr[i] < min2) {
            min2 = arr[i];
        }
    }

    return min2 + min;
}

console.log(find2Min([19, 5, 42, 2, 77]));
console.log(find2Min([10, 343445353, 3453445, 3453545353453]));

