var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let positivo = 0;

for(let i = 1; i <= 6; i++){
    let valor = parseFloat(lines.shift());
    if(valor > 0){
        positivo++
    }
}

console.log(`${positivo} valores positivos`);