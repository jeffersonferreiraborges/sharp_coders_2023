var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let X = parseInt(lines.shift());
let contador = 0;

for(let i = X; contador < 6; i++){

    if(i % 2 !== 0){
        console.log(i);
        contador++;
    }
    if(contador == 6){
        break;
    }
}