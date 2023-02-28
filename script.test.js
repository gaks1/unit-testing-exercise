const stringLength = require('./length');
const reverseString = require('./reverse');
const Calculator = require('./class');
const capitalize = require('./capitalize');


test('length of bookmark', () => {
    expect(stringLength('bookmark')).toBe(8);
})


test('length of when will you arrive', () => {
    expect(() => stringLength("when will you arrive")).toThrow(Error);
})

test('length of ', () => {
    expect(() => stringLength("")).toThrow(Error);
})

test('reverse of when will you arrive', () => {
    expect(reverseString('when will you arrive')).toBe('evirra uoy lliw nehw');
})

const calculator = new Calculator()
describe('addition group', () => {
    test('add 12', () => {
        expect(calculator.add(12)).toBe(12);
    })

    test('add 12', () => {
        expect(calculator.add(12)).toBe(24);
    })

    test('add 24', () => {
        expect(calculator.add(24)).toBe(48);
    })
})

describe('subtraction group', () => {
    test('subtract 3', () => {
        expect(calculator.sub(3)).toBe(45);
    })

    test('subtract 5', () => {
        expect(calculator.sub(5)).toBe(40);
    })

    test('subtract 10', () => {
        expect(calculator.sub(10)).toBe(30);
    })
})


describe('multiplication group', () => {
    test('multiply 2', () => {
        expect(calculator.mul(2)).toBe(60);
    })
    test('multiply 3', () => {
        expect(calculator.mul(3)).toBe(180);
    })
    test('multiply 2', () => {
        expect(calculator.mul(5)).toBe(900);
    })
})

describe('division group', () => {
    test('divide 2', () => {
        expect(calculator.div(2)).toBe(450);
    })
    test('divide 3', () => {
        expect(calculator.div(3)).toBe(150);
    })
    test('divide 5', () => {
        expect(calculator.div(5)).toBe(30);
    })
})


test('capitalize', () => {
    expect(capitalize("read")).toBe("Read");
})






