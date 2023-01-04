/* Escreva um programa em javascript que permita inserir
 o nome e a velocidade de dois veículos e exiba na tela
 uma mensagem dizendo qual dos dois é mais rápido
 (ou que as velocidades são iguais se este for o caso)
*/

const a = prompt("Qual a velocidade do primeiro carro?");
const b = prompt("Qual a velocidade do segundo carro?");

const velocidade1 = parseFloat(a);
const velocidade2 = parseFloat(b);

const resultado = (velocidade1 >= velocidade2) ? "O primeiro carro é mais rápido, sua velocidade é de " + velocidade1 + " Km/H\n" : "O segundo carro é mais rápido, sua velocidade é de " + velocidade2 + " Km/H\n";

alert(resultado);

