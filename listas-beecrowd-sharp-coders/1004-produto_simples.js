var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let v1 = parseInt(lines.shift());
let v2 = parseInt(lines.shift());

let PROD = v1 * v2;

console.log("PROD = " + PROD);