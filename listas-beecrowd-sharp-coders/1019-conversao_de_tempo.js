var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let tempo = parseInt(lines.shift());

let horas = Math.floor(tempo / 3600);
let minutos = Math.floor(Math.round(tempo % 3600) / 60);
let segundos = Math.floor(Math.round(tempo % 3600) % 60);

console.log(`${horas}:${minutos}:${segundos}`);