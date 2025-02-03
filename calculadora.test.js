const { sumar, restar, multiplicar, dividir, raizCuadrada } = require('./calculadora');

test('Suma 2 + 3 y devuelve 5', () => {
    expect(sumar(2, 3)).toBe(5);
});

test('Resta 5 - 3 y devuelve 2', () => {
    expect(restar(5, 3)).toBe(2);
});

test('Multiplicar 5 * 3 y devuelve 15', () => {
    expect(multiplicar(5, 3)).toBe(15);
});

test('Divide 6 / 2 y devuelve 3', () => {
    expect(dividir(6, 2)).toBe(3);
});

test('Raiz cuadrada 16 y devuelve 4', () => {
    expect(raizCuadrada(16)).toBe(4);
});