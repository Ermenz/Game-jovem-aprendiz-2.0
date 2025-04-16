const storyParts = [
  "Era uma vez um jovem chamado {{nome}}...",
  "Que buscava sua primeira oportunidade como Jovem Aprendiz.",
  "Um dia, após muitos processos e entrevistas ele consegue o tão sonhado emprego!",
  "Mas mal sabia que sua jornada tinha acabado de começar",
  ""
];

let currentPart = 0;
let nomeJogador = "";
let setorEscolhido = "";

const nomeInput = document.getElementById("nomeJogador");
const storyText = document.getElementById("storyText");
const nextBtn = document.getElementById("nextBtn");
const popup = document.getElementById("popup");
const jogo = document.getElementById("jogo");
const nomeSpan = document.getElementById("nome");
const setorSpan = document.getElementById("setorEscolhido");
const setorSelect = document.getElementById("setorSelect");

nextBtn.addEventListener("click", () => {
  if (!nomeJogador) {
    nomeJogador = nomeInput.value.trim();
    if (nomeJogador === "") {
      alert("Digite seu nome!");
      return;
    }
    nomeSpan.textContent = nomeJogador;
    storyText.textContent = storyParts[currentPart].replace("{{nome}}", nomeJogador);
    currentPart++;
    nomeInput.style.display = "none";
  } else if (currentPart < storyParts.length) {
    storyText.textContent = storyParts[currentPart];
    currentPart++;

    if (currentPart === storyParts.length) {
      nextBtn.textContent = "Começar Jornada";
      setorSelect.style.display = "block";
    }
  } else if (setorSelect.style.display === "block") {
    setorEscolhido = setorSelect.value;
    if (setorEscolhido === "") {
      alert("Escolha um setor para começar a jornada!");
      return;
    }
    setorSpan.textContent = setorEscolhido;
    popup.style.display = "none";
    jogo.style.display = "block";
    faseAtual = 0;
    document.getElementById("resp").textContent = "0";
    atualizarTela();
  }
});

let faseAtual = 0;
const fases = [
  {
    titulo: "Primeiro Desafio",
    descricao: "Você encontra o gerente logo na entrada. Ele te pede uma tarefa que você não sabe fazer. O que você faz?",
    opcoes: [
      { texto: "Pergunto ao gerente como fazer", pontos: 10 },
      { texto: "Tento resolver sozinho", pontos: -5 },
      { texto: "Pergunto ao meu colega de setor como faz", pontos: 5 },
      { texto: "Não faço", pontos: -5 }
    ]
  },
  {
    titulo: "Segundo Desafio",
    descricao: "Você está realizando uma tarefa quando seu celular toca. É uma mensagem dos amigos chamando para sair. O que você faz?",
    opcoes: [
      { texto: "Ignoro a mensagem e continua focado", pontos: 10 },
      { texto: "Olho a mensagem rapidamente e responde", pontos: 2 },
      { texto: "Saio para responder com calma", pontos: -5 },
      { texto: "Fico no celular escondido", pontos: -10 }
    ]
  },
  {
    titulo: "Terceiro Desafio",
    descricao: "Após um dia intenso de trabalho, o setor está com muito trabalho acumulado. Seu colega parece cansado. O que você faz?",
    opcoes: [
      { texto: "Se oferece para ajudar", pontos: 10 },
      { texto: "Ignora", pontos: -5 },
      { texto: "Espero que ele peça ajuda", pontos: 0 },
      { texto: "Chamo o supervisor para avisar", pontos: -2 }
    ]
  },
  {
    titulo: "Quarto Desafio",
    descricao: "Você percebe um erro em uma tarefa feita por outra pessoa. O que faz?",
    opcoes: [
      { texto: "Corrige sem avisar ninguém", pontos: 2 },
      { texto: "Avisa a pessoa com cuidado", pontos: 10 },
      { texto: "Fala para o gerente direto", pontos: 0 },
      { texto: "Ignora", pontos: -5 }
    ]
  },
  {
    titulo: "Quinto Desafio",
    descricao: "Seu supervisor está de mau humor e responde de forma ríspida. O que você faz?",
    opcoes: [
      { texto: "Mantém a calma e continua", pontos: 10 },
      { texto: "Responde no mesmo tom", pontos: -10 },
      { texto: "Sai do setor", pontos: -5 },
      { texto: "Conversa depois com calma", pontos: 5 }
    ]
  },
  {
    titulo: "Sexto Desafio",
    descricao: "Você esqueceu uma tarefa importante. O que faz?",
    opcoes: [
      { texto: "Admite o erro e resolve rápido", pontos: 10 },
      { texto: "Finge que não sabia", pontos: -5 },
      { texto: "Culpa o sistema", pontos: -10 },
      { texto: "Pede ajuda para resolver", pontos: 5 }
    ]
  },
  {
    titulo: "Sétimo Desafio",
    descricao: "Um colega te convida para ir embora antes do horário. Você...",
    opcoes: [
      { texto: "Recusa e continua no trabalho", pontos: 10 },
      { texto: "Vai embora escondido", pontos: -10 },
      { texto: "Finge que vai ao banheiro", pontos: -5 },
      { texto: "Conversa com o gerente", pontos: 5 }
    ]
  },
  {
    titulo: "Oitavo Desafio",
    descricao: "Seu setor vai precisar fazer hora extra. O que você faz?",
    opcoes: [
      { texto: "Aceito ajudar com boa vontade", pontos: 10 },
      { texto: "Reclamo mas fica", pontos: 2 },
      { texto: "Diz que não pode e vai embora", pontos: -5 },
      { texto: "Finge que está doente", pontos: -10 }
    ]
  },
  {
    titulo: "Nono Desafio",
    descricao: "Você recebe um elogio do gerente. O que faz?",
    opcoes: [
      { texto: "Agradeço com humildade", pontos: 10 },
      { texto: "Me gabo para os colegas", pontos: -5 },
      { texto: "Finjo que não ouvi", pontos: 0 },
      { texto: "Posto nas redes sociais", pontos: -2 }
    ]
  },
  {
    titulo: "Décimo Desafio",
    descricao: "Chegou o fim do contrato. O que você leva dessa experiência?",
    opcoes: [
      { texto: "Muito aprendizado e crescimento", pontos: 10 },
      { texto: "Nada, só stress", pontos: -10 },
      { texto: "Alguns amigos e experiências", pontos: 5 },
      { texto: "Não sei o que aprendi", pontos: 0 }
    ]
  }
];

function atualizarTela() {
  const tituloFase = document.getElementById("titulo-fase");
  const descricaoFase = document.getElementById("descricao-fase");
  const escolha1 = document.getElementById("escolha1");
  const escolha2 = document.getElementById("escolha2");
  const escolha3 = document.getElementById("escolha3");
  const escolha4 = document.getElementById("escolha4");
  const fase = fases[faseAtual];

  tituloFase.textContent = `${fase.titulo} no setor de ${setorEscolhido}`;
  descricaoFase.textContent = fase.descricao;

  [escolha1, escolha2, escolha3, escolha4].forEach((btn, index) => {
    btn.textContent = fase.opcoes[index].texto;
    btn.onclick = () => tomarDecisao(fase.opcoes[index].pontos);
  });
}

function tomarDecisao(pontos) {
  const resultado = document.getElementById("resultado");
  const respElement = document.getElementById("resp");
  const resp = parseInt(respElement.textContent);
  const novoValor = resp + pontos;
  respElement.textContent = novoValor;

  resultado.textContent = pontos >= 0 
    ? `Boa escolha! +${pontos} pontos.`
    : `Essa escolha teve consequências. ${pontos} pontos.`;

  faseAtual++;

  if (faseAtual < fases.length) {
    setTimeout(atualizarTela, 3000);
  } else {
    setTimeout(() => {
      let mensagemFinal = "\n\nParabéns por completar sua jornada como Jovem Aprendiz!\n";

      if (novoValor >= 70) {
        mensagemFinal += "🎉 Seu desempenho foi excelente e você foi EFETIVADO! Parabéns! 👏";
      } else if (novoValor >= 40) {
        mensagemFinal += "👍 Você demonstrou potencial, mas ainda precisa de mais experiência.";
      } else {
        mensagemFinal += "😕 Infelizmente, seu contrato não será renovado. Use isso como aprendizado.";
      }

      resultado.textContent += mensagemFinal;
    }, 3000);
  }
}
