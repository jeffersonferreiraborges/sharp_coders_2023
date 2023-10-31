var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let nome_vendedor = lines.shift();
let salario_fixo = parseFloat(lines.shift());
let total_vendas = parseFloat(lines.shift());

let total_r_f_mes = salario_fixo + (total_vendas * 0.15);

console.log(`TOTAL = R$ ${total_r_f_mes.toFixed(2)}`);