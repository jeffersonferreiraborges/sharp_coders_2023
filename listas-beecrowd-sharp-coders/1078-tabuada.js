var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let N = parseInt(lines.shift());

for(let i = 1; i <= 10; i++){
    console.log(i + " x " + N + " = " + (i * N));
}