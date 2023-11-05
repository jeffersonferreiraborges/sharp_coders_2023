var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var pares = 0;

for(let i = 1; i <= 5; i++){
    var valor = parseInt(lines.shift());
    if(valor % 2 == 0){
        pares++;
    }
}

console.log(`${pares} valores pares`);