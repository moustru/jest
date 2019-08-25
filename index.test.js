const sum = require('./index');

test('1 + 2 равно 3', () => {
    expect(sum(1, 2)).toBe(3);
})

test('присваивание объекту', () => {
    const data = { 'one': 1 };
    data['two'] = 2;

    expect(data).toEqual({ 'one': 1, 'two': 2 })
})

test('сложение положительных чисел не равно нулю', () => {
    for (let a = 1; a < 10; a++) {
        for (let b = 1; b < 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
})

test('null', () => {
    const n = null;
    
    expect(n).toBeNull(); // соответствует только null
    expect(n).toBeDefined(); // соответствует только undefined
    expect(n).not.toBeUndefined(); // противоположность toBeUndefined
    expect(n).not.toBeTruthy(); // соответствует всему, что if инструкция рассматривает как true
    expect(n).toBeFalsy(); // соответствует всему, что if инструкция рассматривает как false
})

test('два плюс два', () => {
    const value = 2 + 2;

    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);
  
    // toBe и toEqual эквивалентны по отношению к числам
    expect(value).toBe(4);
    expect(value).toEqual(4);
})

test('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    
    //expect(value).toBe(0.3); // Это не сработает из-за округления JS
    expect(value).toBeCloseTo(0.3); // Это сработает
})

test('в команде нет места Я', () => {
    expect('команда').not.toMatch(/Я/);
})

test('но есть "ася" в Васе', () => {
    expect('Вася').toMatch(/ася/);
})
  
test('the shopping list has beer on it', () => {
    const shoppingList = [
        'diapers',
        'kleenex',
        'trash bags',
        'paper towels',
        'beer'
    ]

    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
})