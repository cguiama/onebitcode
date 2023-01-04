/* 
- Escreva um programa em javascript para simular uma fila de espera em um consultório médico. 

O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes
esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). 

O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo
paciente ao fim da fila (pedindo o nome do paciente), “Chamar paciente”, que retira o primeiro
paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser
encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu. */

let pacientes = []
let opcao = ""
do {
  opcao = prompt("Quantidade de pacientes na fila é: " + pacientes.length + "\n\nDigite a opção desejada\n\n1- Novo paciente\n2- Chamar paciente\n3- Sair");

  switch (opcao) {
    case "1":
      pacientes.push(prompt("Digite o nome do paciente"));
      break;
    case "2":
      if (pacientes.length == 0) {
        alert("Não há pacientes na fila")
      } else {
        let removePaciente = pacientes.shift()
        alert("O paciente " + removePaciente + " foi chamado e removido da fila.");
        break;
      }
    case "3":
      break;
    default:
      alert("Opção inválida");
  }
} while (opcao !== "3") {
  alert("O programa está sendo encerrado.\n\nSua posição na fila é: " + (pacientes.length + 1));
}

