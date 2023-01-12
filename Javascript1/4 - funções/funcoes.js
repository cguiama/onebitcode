/*
Escreva um programa em javascript para calcular a área de diferentes
formas geométricas. O programa deve iniciar com um menu contendo as
diferentes opções de cálculas. As opções devem ser:

- área do triângulo: base * altura / 2
- área do retângulo: base * altura
- área do quadrado: lado²
- área do trapézio: (base maior + base menor) * altura / 2
- área do círculo: pi * raio² (considere pi = 3.14)

Você deve escrever o programa usando funções sempre que possível para
separar os procedimentos. O programa também deve ter uma opção de
“Sair” e enquanto ela não for escolhida deverá voltar ao menu.
*/

function areaTri(base, altura) {
  return (base * altura) / 2
}

function areaRec(base, altura) {
  return (base * altura)
}

function areaQuad(lado) {
  return (lado * 2)
}

function areaTrap(baseMaior, baseMenor, altura) {
  return (baseMaior + baseMenor) * (altura / 2)
}

function areaCirc(raio) {
  return Math.PI * (raio ** raio)
}

let programa = "";

do {
  alert("Bem vindo a calculadora de formas geométricas.");
  programa = prompt("Digite a opção desejada\n\n1- área do triângulo\n2- área do retângulo\n3- área do quadrado \n4- área do trapézio\n5- área do círculo\n6- Sair")

  switch (programa) {
    case "1":
      a = prompt("Digite a base do triangulo");
      b = prompt("Digite a altura do triangulo");
      /* let area = areaTri(a, b); */
      alert("A área do triangulo com base " + a + " e altura " + b + " é igual a: " + areaTri(a, b));
      break;
    case "2":
      break;
    case "3":
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      alert("Encerrando programa.")
      break;
  }
} while (programa !== "6")