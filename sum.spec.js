const { compact } = require("./sum");

const data = [0, 1, false, 2, '', 3];
const resultCompact = [1, 2, 3];

describe("Compact", () => {
    test('Should be removed all false values', () => {
        expect(compact(data)).toEqual(resultCompact)
    })
});


describe("Concat", () => {
    test("Should concat values", () => {
        const data = [1, 2, 3];
        const result = [1, 2, 3, 1, 2, 3, 4, 5];
        expect(concat(data, 1, 2, 3, 4, 5)).toEqual(result);
    });
});