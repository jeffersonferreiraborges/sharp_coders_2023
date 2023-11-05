var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let positivos = 0;
let soma = 0;

for(let i = 1; i <= 6; i++){
    var valor = parseFloat(lines.shift());
    if(valor > 0){
        positivos++;
        soma += valor;
    }
}

let media = soma / positivos;

console.log(`${positivos} valores positivos`);
console.log(media.toFixed(1));