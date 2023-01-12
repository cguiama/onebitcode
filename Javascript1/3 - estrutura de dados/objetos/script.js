/* 
Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos.
*/
let opcao = "5"
const imoveis = [];

alert("Olá! Seja bem vindo ao sistema de cadastro imobiliário.");
do {
  opcao = prompt("O sistema possui " + imoveis.length + " imoveis cadastrados.\n\n" + "Digite a opção desejada.\n\n1- Cadastrar imóvel.\n2- Imóveis cadastrados.\n3- Sair.\n");

  switch (opcao) {
    case "1":
      const imovel = {}
      imovel.proprietario = prompt("Informe o nome do proprietario.");
      imovel.quartos = prompt("Quantos quartos possui o imovel?");
      imovel.banheiros = prompt("Quantos banheiros possui o imovel?");
      imovel.garagem = prompt("Possui garagem? (Sim/Não)");

      const confirmacao = confirm("Salvar as informações?\n" +
        "\nProprietário: " + imovel.proprietario +
        "\nQuartos: " + imovel.quartos +
        "\nBanheiros: " + imovel.banheiros +
        "\nGaragem: " + imovel.garagem
      )

      if (confirmacao) {
        imoveis.push(imovel);
        alert("Seu imóvel foi salvo com sucesso.");
      }
      break;

    case "2":
      let op = prompt("Você tem " imoveis.length + " cadastrados, o que deseja fazer?\n1- Mostrar lista.\n2- Selecionar imóvel.\n 3- Sair.");
      for (let i = 0; i < imoveis.length; i++) {
        /*   
        adicionar menu com objetos
        alert(
                  "Imóvel " + (i + 1) +
                  "\nProprietário: " + imoveis[i].proprietario +
                  "\nQuartos: " + imoveis[i].quartos +
                  "\nBanheiros: " + imoveis[i].banheiros +
                  "\nGaragem: " + imoveis[i].garagem
                ) */
      }
      break;
    case "3":
      alert("Encerrando sistema.");
      break;
    default:
      alert("Opção inválida.")
      break;
  }
} while (opcao !== "3")