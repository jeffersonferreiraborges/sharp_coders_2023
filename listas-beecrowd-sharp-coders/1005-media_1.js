var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let A = parseFloat(lines.shift());
let B = parseFloat(lines.shift());

let media = ((3.5 * A) + (7.5 * B)) / 11;

console.log("MEDIA = " + media.toFixed(5));