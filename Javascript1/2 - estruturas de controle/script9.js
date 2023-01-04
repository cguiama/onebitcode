/*Escreva um programa em javascript que seja capaz de calcular a tabuada de um determinado número
de 1 a 20). O programa deve começar pedindo o número a ser usado nos cálculos e então salvar 
todos os resultados de multiplicações de 1 a 20 usando o número informado dentro de uma variável
do tipo string. Depois o programa deve exibir esses resultados e finalizar.*/

let numero = prompt("Qual o número que deseja fazer a tabuada");
let resultado = "";

for (i = 1; i <= 20; i++) {
  resultado += "O valor de " + numero + " x " + i + " é igual a " + (parseFloat(numero) * i) + "\n"
}
alert(resultado);

//caso eu queira mostrar o valor de varias iterações, não posso esquecer de concatenar antes de mostrar o resultado.