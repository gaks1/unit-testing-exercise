class Calculator {
    constructor() {
        this.result = 0;
    }
    add(num) {
        this.result += num;
        return this.result;
    }
    sub(num) {
        this.result -= num;
        return this.result;
    }
    mul(num) {
        this.result *= num;
        return this.result;
    }
    div(num) {
        this.result /= num;
        return this.result;
    }
}

module.exports = Calculator;