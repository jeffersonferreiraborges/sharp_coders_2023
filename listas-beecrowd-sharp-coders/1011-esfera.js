var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let R = parseFloat(lines.shift());
let pi = 3.14159;
let v_esfera = parseFloat(4/3.0) * pi * Math.pow(R,3);

console.log(`VOLUME = ${v_esfera.toFixed(3)}`);