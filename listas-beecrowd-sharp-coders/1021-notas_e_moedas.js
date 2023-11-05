var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let valor = parseFloat(lines.shift());

let valorNota = [100, 50, 20, 10, 5, 2];
let qtdNotas = 0;

console.log("NOTAS:");

for(let nota of valorNota){
    qtdNotas = Math.floor(valor / nota);
    valor %= nota;
    console.log(`${qtdNotas} nota(s) de R$ ${nota.toFixed(2)}`);
}

console.log("MOEDAS:");

let valorMoeda = [1, 0.50, 0.25, 0.10, 0.05, 0.01];
let qtdMoedas = 0;

for(let moeda of valorMoeda){
    qtdMoedas = Math.floor(valor / moeda);
    valor = (valor % moeda).toFixed(2);
    console.log(`${qtdMoedas} moeda(s) de R$ ${moeda.toFixed(2)}`);
}