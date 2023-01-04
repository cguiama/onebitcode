/* Escreva um programa em javascript que seja capaz de identificar se uma palavra é um palíndromo. 
Um palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem. 

- O programa deve iniciar pedindo que seja informada uma palavra e então deve exibir uma mensagem 
dizendo se aquela palavra é ou não um palíndromo. Caso não seja um palíndromo, o programa deve
mostrar a palavra lida da esquerda para direita e da direita para esquerda. */

alert("Hoje vamos verificar palíndromos!\n\nUm palíndromo é uma palavra que lida de trás para frente possui as mesmas letras na mesma ordem.");
const palavra = prompt("Qual palavra você deseja verificar")
let palavraInvertida = ""

for (let i = palavra.length - 1; i >= 0; i--) {
  palavraInvertida += palavra[i];
}

/* if (palavraInvertida === palavra) { alert("É um palíndromo") } else { alert("Não é um palíndromo") } */

palavraInvertida === palavra ? alert("É um palíndromo") : alert("Não é um palíndromo")