
const findUniq = (arr) => {

    for(let i=1; i<arr.length ; i++){
        if(arr[i] != arr[i-1]){
            if(arr[i] !== arr[(i+1) %arr.length])
                return arr[i];
            else 
                return arr[i-1]    

        }

    }

}



console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]));
console.log(findUniq([ 2, 1, 1, 1, 1, 1 ]));
console.log(findUniq([ 1, 1, 1, 1, 1, 2 ]));
console.log(findUniq([ 1, 1, 2 ]));


console.log( findUniq([ 0, 0, 0.55, 0, 0 ]) );

