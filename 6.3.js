const longest = (a, b) => {
    let strArr = (a + b).split('').sort();
    let str = '';
    for (let i = 0; i < strArr.length - 1; i++) {
        if (strArr[i] !== strArr[i + 1])
            str += strArr[i];
    }
    if (strArr.length > 2 &&
        strArr[strArr.length - 1] === strArr[strArr.length - 2])
        str += strArr[strArr.length - 1];

    return str;
}

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"));
console.log(longest('abcdefghijklmnopqrstuvwxyz','abcdefghijklmnopqrstuvwxyz'));
