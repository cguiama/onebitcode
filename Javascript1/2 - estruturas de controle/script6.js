/*Escreva um programa em javascript que peça o nome de um turista e então
pergunte se ele já visitou alguma cidade. Caso a resposta seja sim, pergunte o
nome da cidade e o armazene em uma variável, e então continue perguntando se
o turista visitou alguma outra cidade até que a resposta seja não. No fim, o
programa deve exibir o nome do turista, quantas e quais cidades ele visitou.*/

const nome = prompt("Digite o seu nome, turista.");
let lugares = "";
let contagem = 0

const simViagem = "Olá " + nome + " você já visitou " + contagem + " lugares:\nOs lugares são:\n" + lugares;
const naoViagem = nome + " vá viajar! É o melhor investimento de sua vida.\n\n Recarregue a página caso tenha viajado.";

const seViagem = prompt("Você já viajou?\nDigite: Sim ou Não.");

if (seViagem === "Sim" || seViagem === "sim") {
  let pergunta = prompt("Deseja adicionar o nome do local?\n1- Sim\n2- Não")
  const mensagem = "Digite o nome do país ou cidade que já visitou";

  while (pergunta === "1") {
    let adcLocal = prompt(mensagem);
    if (adcLocal === "") { contagem-- }
    lugares += "- " + adcLocal + "\n";
    contagem++;

    pergunta = prompt("Deseja adicionar mais um local?\n1- Sim\n2- Não")
    if (pergunta === "2") { break; }
  }
  contagem > 0 ? alert(simViagem) : alert(naoViagem)
} else { alert(naoViagem) }