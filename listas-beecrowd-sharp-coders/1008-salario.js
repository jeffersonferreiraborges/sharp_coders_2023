var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let n = parseInt(lines.shift());
let h = parseInt(lines.shift());
let v = parseFloat(lines.shift());

let s = parseFloat(h * v.toFixed(2));

console.log("NUMBER = " + n);
console.log("SALARY = U$ " + s.toFixed(2));