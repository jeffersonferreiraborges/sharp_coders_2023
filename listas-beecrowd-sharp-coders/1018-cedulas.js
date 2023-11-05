var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let valor = parseInt(lines.shift());
let valorNota = [100, 50, 20, 10, 5, 2, 1];
let qtdNotas = 0;

console.log(valor);

for(let nota of valorNota){
    qtdNotas = Math.floor(valor / nota);
    valor %= nota;
    console.log(`${qtdNotas} nota(s) de R$ ${nota},00`);
}