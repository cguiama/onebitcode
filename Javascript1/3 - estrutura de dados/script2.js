/* 
Escreva um programa em javascript para simular um baralho de cartas. 

O programa deve iniciar mostrando na tela um menu interativo contendo as cartas que estão atualmente no baralho e as opções de 
- “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o
nome da carta e adicioná-la no topo do baralho. 

Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada.
 
O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

*/

let cartas = []
let opcao = ""

do {
  opcao = prompt("As cartas no baralho são: " + cartas + "\n\nDigite a opção desejada\n\n1- Adicionar uma carta\n2- Puxar uma carta\n3- Sair")
  switch (opcao) {
    case "1":
      cartas.unshift(prompt("Qual é a carta?"))
      break;
    case "2":
      if (cartas.length == 0) { alert("Não existem mais cartas no monte.") } else {
        cartas.shift(alert("A carta retirada foi " + cartas));
        break;
      }
    case "3":
      break;
    default:
      alert("Opção inválida")
  }
} while (opcao !== "3") {
  alert("Fechando programa.")
}