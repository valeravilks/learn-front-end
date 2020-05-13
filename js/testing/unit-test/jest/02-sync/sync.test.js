const Lodash = require('./sync');

// Создаем инстанс касса для тестирования
const _ = new Lodash();

describe('Lodash: compact', () => {

    let array;

    // Хук, который вызываеться перед каждым тестом
    beforeEach(() => {
        array = [false, 42, 0 , '', true, null, 'hello'];
    })

    test('should be defined', () => {
        expect(_.compact).toBeDefined();
        expect(_.compact).not.toBeUndefined();
    })

    test('should remove falsy values from array', () => {
        // Массивы для тестирования
        const result = [42, true, 'hello'];
        expect(_.compact(array)).toEqual(result);
    })

    test('should NOT contain false values', () => {
        expect(_.compact(array)).not.toContain(false); // не должен содержать
        expect(_.compact(array)).not.toContain(0); // не должен содержать
        expect(_.compact(array)).not.toContain(''); // не должен содержать
        expect(_.compact(array)).not.toContain(null); // не должен содержать
    })
})

describe('Lodash: groupBy', () => {
    test('should be defined', () => {
        expect(_.groupBy).toBeDefined();
        expect(_.groupBy).not.toBeUndefined();
    })

    test('should group array items by Math.floor', () => {
        const array = [2.2, 2.4, 4.2, 3.1];
        const result = {
            2: [2.2, 2.4],
            4: [4.2],
            3: [3.1]
        }
        expect(_.groupBy(array, Math.floor)).toEqual(result);
    })

    test('should group array items by length', () => {
        const array = ['one', 'two', 'three'];
        const result = {
            5: ['three'],
            3: ['one', 'two']
        }
        expect(_.groupBy(array, 'length')).toEqual(result);
    })

    test('should not return array', () => {
        expect(_.groupBy([], Math.trunc)).not.toBeInstanceOf(Array);
    })
})