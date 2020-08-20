const countSleepers = (arr) => {

    return arr.reduce((total, tuple) => total + tuple[0] - tuple[1], 0);

}


const busSchedule1 = [
    [1, 0],
    [2, 0],
    [3, 1],
    [0, 3]
]

console.log( countSleepers(busSchedule1));