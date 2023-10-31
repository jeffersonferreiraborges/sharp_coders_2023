var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let vetor = lines[0].split(" ");

let a = vetor[0];
let b = vetor[1];
let c = vetor[2];

let maior = Math.max(a, b, c);

console.log(maior + " eh o maior");