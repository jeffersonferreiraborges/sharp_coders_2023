var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let X = parseInt(lines.shift());
let Y = parseFloat(lines.shift());

let consumo_medio = X / Y;

console.log(`${consumo_medio.toFixed(3)} km/l`);