const fibonacci = function(numArg) {
    let num;
    if (typeof numArg !== 'number') {
        num = parseInt(numArg);
    } else {
        num = numArg;
    }
    if (num < 0) return "OOPS";
    if (num == 0) return 0;

    const fib = [0, 1]; 
    for(let i = 2; i <= num; i++) {
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib[num];
};

// Do not edit below this line
module.exports = fibonacci;
