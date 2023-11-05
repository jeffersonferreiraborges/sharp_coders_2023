var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let idade = parseInt(lines.shift());

let ano = Math.floor(idade / 365);
let sobra = idade % 365;
let mes = Math.floor(sobra / 30);
sobra = sobra % 30;
let dia = sobra;

console.log(ano + " ano(s)");
console.log(mes + " mes(es)");
console.log(dia + " dia(s)");