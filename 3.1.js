
const nb_year = (start,percent,addedEachYear,end )=>{
    let count =0;
    let now = start;
    let percentByDecimal =  percent /100;
    // console.log(percentByDecimal)
    while(now < end) {
        count++;
        now =  now + now*percentByDecimal +addedEachYear;       
    }

    return count;
    
}

console.log(nb_year(1500,5,100,5000));

console.log( nb_year(1500000, 2.5, 10000, 2000000));