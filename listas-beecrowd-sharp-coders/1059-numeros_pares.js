var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

for(let n = 1; n <= 100; n++){
    if(n % 2 == 0){
        console.log(n);
    }
}