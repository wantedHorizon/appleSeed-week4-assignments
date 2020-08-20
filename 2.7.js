const basicOp = (op, num1, num2) => {
    switch (op) {

        case '+':
            return num1 + num2;

        case '-':
            return num1 - num2;

        case '*':
            return num1 * num2;

        case '/':
            return num1 / num2;

        default:
            console.log('Invalid OP');
            return

    }
}



console.log(basicOp('+', 4, 7)); // Output: 11

console.log(basicOp('-', 15, 18)); // Output: -3

console.log(basicOp('*', 5, 5)); // Output: 25

console.log(basicOp('/', 49, 7)); // Output: 7