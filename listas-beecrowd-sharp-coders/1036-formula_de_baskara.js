var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let valores = lines[0].split(" ");

let A = valores[0];
let B = valores[1];
let C = valores[2];

let delta = Math.pow(B, 2) - (4 * A * C);

let R1 = ((-B) + Math.sqrt(delta)) / (2 * A);
let R2 = ((-B) - Math.sqrt(delta)) / (2 * A);

if(A == 0|| delta < 0){
    console.log("Impossivel calcular");
}else{
    console.log("R1 = " + R1.toFixed(5));
    console.log("R2 = " + R2.toFixed(5));
}