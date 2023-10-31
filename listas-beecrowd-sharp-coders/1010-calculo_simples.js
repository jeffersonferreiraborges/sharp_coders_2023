var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let pc1 = lines.shift().split(' ');
let pc2 = lines.shift().split(' ');

let total_pagar = (pc1[2] * pc1[1]) + (pc2[2] * pc2[1]);

console.log(`VALOR A PAGAR: R$ ${total_pagar.toFixed(2)}`);