var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

let salario = parseFloat(lines.shift());

let imposto = 0;

if(salario > 0 && salario <= 2000.00){
    imposto = salario * 0.8;
    console.log("Isento");
}else if(salario >= 2000.01 && salario <= 3000.00){
    console.log(`${imposto}`)
}else if(salario > 3000.01 && salario <= 4500.00){
    
}else if(salario >= 4500.00){
    
};