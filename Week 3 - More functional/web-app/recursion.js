const Factorial = function(x) {
    if (x < 0)
        return -1
    else if (x === 0)
        return 1
    else
        return (x*Factorial(x-1));
}

const Fibonacci = function(x) {
    if (x <= 0)
        return 0
    else if (x === 1)
        return 1
    else
        return Fibonacci(x-1) + Fibonacci(x-2)
}
const Lucas = function(x) {
    if (x === 0)
        return 2
    if (x === 1)
        return 1
    else
        return Lucas(x-1) + Lucas(x-2)
}

const Brady = function(x) {
    if (x === 0)
        return 2308
    if (x === 1)
        return 4261
    else
        return Brady(x-1) + Brady(x-2)
}

const Fib_operation = function(z) {
    return Fib_operation(z-1) + Fib_operation(z-2)
}

const Fib_Like = function(x, y) {
    return function(z) {
        if (z === 0)
            return x
        if (z === 1)
            return y
        else
            return Fib_operation(z - 1) + Fib_operation(z - 2)
    }
}

debugger;