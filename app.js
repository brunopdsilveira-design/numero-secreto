let listaDeNumerosSorteados = [];
let num_limite = 10;
let numero_secreto = gerarNumAleatorio();
let numero_tentativas = 1;

function exibirTextoNaTela(tag, texto) {
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;      
}

exibirMensagemInicial();

function verificarChute() {
  let chute = document.querySelector("input").value;

  if (chute == numero_secreto) {
    exibirTextoNaTela("h1", "Acertou!");
    let palavra_tentativa = numero_tentativas > 1 ? "tentativas" : "tentativa";
    let mensagem_tentativas = `Você descobriu o número secreto com ${numero_tentativas} ${palavra_tentativa}!`;
    exibirTextoNaTela("p", mensagem_tentativas);
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else if (chute < numero_secreto) {
    exibirTextoNaTela("p", "O número secreto é maior!");
  } else {
    exibirTextoNaTela("p", "O número secreto é menor!");
  }

  numero_tentativas++;
  limparCampo();
}

function gerarNumAleatorio() {
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

  if(quantidadeDeElementosNaLista == num_limite) {
    listaDeNumerosSorteados = [];
  }

  let numero_escolhido = parseInt(Math.floor(Math.random() * num_limite + 1));
  if (!listaDeNumerosSorteados.includes(numero_escolhido)) {
    listaDeNumerosSorteados.push(numero_escolhido);
  }

  console.log(listaDeNumerosSorteados);
  return numero_escolhido;
}

function limparCampo() {
  let chute = document.querySelector("input");
  chute.value = "";
}

function exibirMensagemInicial() {
  exibirTextoNaTela("h1", "Jogo do número secreto");
  exibirTextoNaTela("p", "Escolha um número entre 1 e 10");
}

function reiniciarJogo() {
  numero_secreto = gerarNumAleatorio();
  limparCampo();
  numero_tentativas = 1;
  exibirMensagemInicial();
  document.getElementById("reiniciar").setAttribute("disabled", true);
}
