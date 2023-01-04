/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro
disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e
remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve
perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então
mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover
dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa. */

let carteira = 0

let dinheiro = prompt("Quanto será o valor inicial?")
carteira = parseFloat(dinheiro);
let mostra = "";


do {
  mostra = prompt("Saldo disponível R$" + carteira + ".\n\nQuer fazer um depósito, saque ou sair?\n\n1- Deposito\n2- Saque\n3- Sair");

  switch (mostra) {
    case "1":
      let deposito = prompt("Digite é o valor em R$?");
      let converte = parseFloat(deposito);
      carteira += converte;
      break;
    case "2":
      /* alternativa não verbosa da "mesma" função acima */
      carteira -= parseFloat(prompt("Digite o valor do saque em R$"))
      break;
    case "3":
      alert("Saindo! O seu saldo é de: R$" + carteira);
      break;
    default:
      alert("Opção inválida")
  }
} while (mostra !== "3");