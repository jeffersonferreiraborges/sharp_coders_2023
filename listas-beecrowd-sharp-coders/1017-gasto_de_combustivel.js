var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let horas = lines.shift();
let km_h = lines.shift();

let litros = horas * km_h / 12;

console.log(litros.toFixed(3));