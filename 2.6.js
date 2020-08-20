const centuryFromYear = (year) => {
    if(year % 100 === 0){
        return parseInt(year/100);
    }
    return parseInt(year/100) +1;

};


console.log(centuryFromYear(1705));
console.log(centuryFromYear(1900));
console.log(centuryFromYear(1601));
console.log(centuryFromYear(2000));
console.log(centuryFromYear(100));
console.log(centuryFromYear(50));



