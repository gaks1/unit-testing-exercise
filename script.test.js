const stringLength = require('./length');


test('length of bookmark', () => {
    expect(stringLength('bookmark')).toBe(8);
})


test('length of when will you arrive', () => {
    expect(() => stringLength("when will you arrive")).toThrow(Error);
})

test('length of ', () => {
    expect(() => stringLength("")).toThrow(Error);
})









