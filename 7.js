
const myFilter = (arr, callback)=>{
    const newArr = [];
    for(let i=0 ;i<arr.length; i++){
        if(callback(arr[i],i,arr)){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


const myForEach = (arr, callback) => {
    for(let i=0 ;i<arr.length; i++){
        callback(arr[i],i,arr)
     
    }
}


const myMap = (arr,callback) => {
    const newArr = [];
    for(let i=0 ;i<arr.length; i++){
            newArr.push( callback(arr[i],i,arr));
        
    }
    return newArr;
}

//tests
const num1 = [1,1,1,1,1,1,1,1,1];
const num2 = [1,2,3,4,5,6,7,8,9,10];
const doublePlusIndex=((n,i) => n*2+i);
const biggerThen5 = ((n,i) => n>5|| i>3);
const printArr = (a => console.log(a));

console.log(myMap(num1,doublePlusIndex));
console.log(myFilter(num2,biggerThen5))
console.log(myForEach(num2,printArr));
