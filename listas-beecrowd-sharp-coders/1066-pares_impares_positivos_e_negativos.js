var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

var pares = 0;
var impares = 0;
var positivos = 0;
var negativos = 0;

for(let i = 1; i <= 5; i++){
    var valor = parseInt(lines.shift());
    if(valor % 2 == 0){
        pares++;
    }else{
        impares++;
    }
    if(valor > 0){
        positivos++;
    }else if(valor < 0){
        negativos++;
    }
}

console.log(`${pares} valor(es) par(es)`);
console.log(`${impares} valor(es) impar(es)`);
console.log(`${positivos} valor(es) positivo(s)`);
console.log(`${negativos} valor(es) negativo(s)`);