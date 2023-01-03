/* Escreva um programa em javascript que funcione como um conversos de medidas.
O programa deverá pedir por um valor em metros e então dar a opção de escolher
para qual unidade de medida esse valor deve ser convertido. As opções são:

a - milímetro (mm)
b - centímetro (cm)
c - decímetro (dm)
d - decâmetro (dam)
e - hectômetro (hm)
f - quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.
O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/

//variáveis iniciais
const inputMetro = prompt("Digite o valor em Metros");
const metro = parseFloat(inputMetro);

const mm = metro * 1000;
const cm = metro * 100;
const dm = metro * 10;
const dam = metro / 10;
const hm = metro / 100;
const km = metro / 1000;



//função de converter

const retornoPrompt = prompt("Escolha a unidade de conversão:\n1 - milímetro(mm)\n2 - centímetro(cm)\n3 - decímetro(dm)\n4 - decâmetro(dam)\n5 - hectômetro(hm)\n6 - quilômetro(km)");

const converteValor = parseFloat(retornoPrompt);

switch (converteValor) {
  case 1:
    alert("O valor convertido de 1m para mm é " + mm + " milimetros.");
    break;
  case 2:
    alert("O valor convertido de 1m para cm é " + cm + " centimetros.");
    break;
  case 3:
    alert("O valor convertido de 1m para dm é " + dm + " decímetros.");
    break;
  case 4:
    alert("O valor convertido de 1m para dam é " + dam + " decâmetros.");
    break;
  case 5:
    alert("O valor convertido de 1m para hm é " + hm + " hectômetro.");
    break;
  case 6:
    alert("O valor convertido de 1m para km é " + km + " quilômetro.");
    break;
  default:
    alert("Finalizando... \nRecarregue a página.")
}





