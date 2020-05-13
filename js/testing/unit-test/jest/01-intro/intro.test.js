const {sum, nativeNull} = require('./intro');

// describe - описывает блок тестов, для удобного разделения тестов на блоки
describe('Sum function', () => {
    /* test - функция позволяет тестировать элементы
    *  Первый параметр, текстовое описание теста, второй - функция с тестами
    */
    test('adds 1 + 2 to equal 3', () => {
        // expect - функция, которая и тестирует конктерные значения.
        // toBe - ожидаем, что результат 3
        expect(sum(1, 2)).toBe(3); // для примитивов
        expect(sum(1, 2)).toEqual(3); // для объектов или массивов
    });

    test('Sum should return value correctly comparing to other', () => {
        expect(sum(1, 2)).toBe(3); // должно быть равно результату
        expect(sum(2, 3)).toBeGreaterThan(4); // больше чем 4
        expect(sum(2, 3)).toBeGreaterThanOrEqual(4); // больше или равно 4
        expect(sum(2, 3)).toBeLessThan(10); // меньше чем 10
        expect(sum(2, 3)).toBeLessThanOrEqual(10); // меньше или равно чем 10
    })

    test('Sum should sum 2 float values correctly', () => {
        expect(sum(0.1, 0.2)).toBeCloseTo(0.3); // близок к значению
    })
})

describe('Sum nativeNull function', () => {
    test('Should return false value null', () => {
        expect(nativeNull()).toBe(null);
        expect(nativeNull()).toBeNull(); // проверка на null
        expect(nativeNull()).toBeFalsy(); // undefined, null, 0, '' - то что не пройдет if
        expect(nativeNull()).toBeDefined(); // значение определено
        expect(nativeNull()).not.toBeTruthy(); // не пустая строка, не null, не undefined
        expect(nativeNull()).not.toBeUndefined(); // не undefined

    })
});

