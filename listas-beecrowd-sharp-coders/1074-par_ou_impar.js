var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let N = parseInt(lines.shift());

for(let i = 0; i < N; i++){
    let X = parseInt(lines.shift());
    if(X == 0){
        console.log("NULL");
    }else{
        let parOuImpar = X % 2 == 0 ? "EVEN" : "ODD";
        let positivoOuNegativo = X > 0 ? "POSITIVE" : "NEGATIVE";
        console.log(parOuImpar + " " + positivoOuNegativo);
    }
}