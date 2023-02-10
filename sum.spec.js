const { compact, concat } = require("./sum");



describe("Compact", () => {
    test('Should be removed all false values', () => {
        const data = [0, 1, false, 2, '', 3];
        const result = [1, 2, 3];
        expect(compact(data)).toEqual(result);
    })
});


describe("Concat", () => {
    test("Should concat values", () => {
        const data = [1, 2, 3];
        const result = [1, 2, 3, 1, 2, 3, 4, 5];
        expect(concat(data, 1, 2, 3, 4, 5)).toEqual(result);
    });
});