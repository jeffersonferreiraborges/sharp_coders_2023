var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let vetor = lines[0].split(" ");

let A = parseFloat(vetor[0]);
let B = parseFloat(vetor[1]);
let C = parseFloat(vetor[2]);

let tri_ret = (A * C) / 2;
let cir_rai = 3.14159 * C * C;
let trap = ((A + B) * C) / 2;
let qua = B * B;
let ret = A * B;

console.log(`TRIANGULO: ${tri_ret.toFixed(3)}`);
console.log(`CIRCULO: ${cir_rai.toFixed(3)}`);
console.log(`TRAPEZIO: ${trap.toFixed(3)}`);
console.log(`QUADRADO: ${qua.toFixed(3)}`);
console.log(`RETANGULO: ${ret.toFixed(3)}`);