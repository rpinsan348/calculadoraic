// calculadora.js

function sumar(a, b) {
  return a + b;
}

function restar(a, b) {
  return a - b;
}

function multiplicar(a, b) {
  return a * b;
}

function dividir(a, b) {
  return a / b;
}

function raizCuadrada(a) {
  return Math.sqrt(a)
}

module.exports = { sumar, restar, multiplicar, dividir, raizCuadrada };


function suma(a, b) { return a + b; } function resta(a, b) { return a - b; } 
function multiplicar(a, b) { return a * b; } function dividir(a, b) { if (b === 0) { throw new Error("No se puede dividir por cero"); } return a / b; } 
// Hacer las funciones accesibles en el navegador 

module.exports(suma, resta, multiplicar, dividir);
/*window.suma = suma; 
window.resta = resta; 
window.multiplicar = multiplicar; 
window.dividir = dividir;*/