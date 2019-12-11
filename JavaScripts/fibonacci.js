'use strict';
// recursive
// run  : node fibonacci.js [input]
// ex   : node fibonacci.js 10

function fibonacci(n) {

    if (n == 0) {
        return 0;
    }else if (n <= 2) {
        return 1;
    }

    let res = fibonacci(n - 1) + fibonacci(n - 2);
    return res;
}

function fib(n) {

    for (let i = 0; i<=n; i++) {
        let f = fibonacci(i);
        console.log(`n: ${i} -- Xn: ${f}`);
    }
}

let inputs = process.argv.slice(2);
let input = inputs.length > 0 ? inputs[0] : 0;
let sequence = isNaN(input) ? 0 : input;
console.log(`inputs: ${inputs} -- sequence: ${sequence}`);

fib(sequence);
