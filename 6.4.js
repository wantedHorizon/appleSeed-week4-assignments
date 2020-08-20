const countDuplicates = (str) => {
    const object = strToObjectLength(str);
    return Object.values(object).reduce((acc, num) => num > 1 ? acc + 1 : acc, 0);

}

const strToObjectLength = (str) => {
    let object1 = {};
    let oneString = str;

    while (oneString.length > 0) {
        let first1 = "" + oneString[0];
        let count = (oneString.match(new RegExp(first1, "ig")) || []).length;
        object1[first1] = count;
        oneString = oneString.replace(new RegExp(first1, "ig"), "");
    }
    return object1;
};


const isIsogram = (str) => {
    return countDuplicates(str) > 0 ? false : true;

}

console.log( isIsogram('Dermatoglyphics') );
console.log( isIsogram('aba') );
console.log( isIsogram('moOse') );
