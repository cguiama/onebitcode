/* Escreva um programa que permita inserir o nome e o poder de ataque de um
personagem, depois o nome, a quantidade de pontos de vida, o poder de defesa de
outro personagem e se ele possui um escudo, e então calcule a quantidade de dano
causado baseado nas seguintes regras: */

alert("Olá! Hoje iremos simular uma batalha entre dois personagens!");
//variaveis do primeiro personagem
const nome1 = prompt("Qual o nome do seu primeiro personagem?");
const poder = prompt("Qual o poder de ataque?");
const ataque = parseFloat(poder);

//variaveis do segundo personagem
const nome2 = prompt("Qual o nome do seu segundo personagem?");
const pv = prompt("Quantos pontos de vida ele tem?");
let pVida = parseFloat(pv);
const pdef = prompt("Qual o poder de defesa?");
const defesa = parseFloat(pdef);
const escudo = confirm("Ele possui escudo?") //retorna true or false

let dano

/*- Se o poder de ataque for maior do que a defesa e o defensor não possuir um escudo,
o dano causado será igual a diferença entre o ataque e a defesa. */
if (ataque > defesa && escudo == false) {
  dano = ataque - defesa;
  pVida = pVida - dano;
  alert("O dano que " + nome2 + "sofreu, foi de " + dano + ".\nSobraram " + pVida + " pontos de vida.")
}
/*- Se o poder de ataque for maior do que a defesa e o defensor possuir um escudo, o
dano causado será igual a metade da diferença entre o ataque e a defesa.*/
else if (ataque > defesa && escudo == true) {
  dano = (ataque - defesa) / 2;
  pVida = pVida - dano;
  alert("O dano que " + nome2 + " sofreu, foi de " + dano + ".\nSobraram " + pVida + " pontos de vida.")
}
/*- Se o poder de ataque for menor ou igual a defesa, o dano causado será 0.*/
else {
  dano = 0;
  pVida = pVida - dano;
  alert(nome2 + " não sofreu dano e restam " + pVida + " pontos de vida.")
}

/*Por fim, o programa deve subtrair a quantidade de dano da quantidade de pontos de
 vida do personagem defensor e exibir na tela a quantidade de dano e as informações
 atualizadas de ambos os personagens.*/