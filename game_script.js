let fases = [];
let faseAtual = 0;
let atributos = {
  resp: 50,
  pont: 50,
  com: 50,
  desem: 50
};

document.getElementById("nextBtn").addEventListener("click", () => {
  const nome = document.getElementById("nomeJogador").value;
  const popup = document.getElementById("popup");
  const storyText = document.getElementById("storyText");
  const setorSelect = document.getElementById("setorSelect");

  if (nome.trim() === "") {
    alert("Digite seu nome!");
    return;
  }

  document.getElementById("nome").textContent = nome;

  // Mostra seletor de setor
  if (setorSelect.style.display === "none") {
    storyText.textContent = `Muito bem, ${nome}! Agora escolha seu setor.`;
    setorSelect.style.display = "block";
  } else {
    const setor = setorSelect.value;
    if (!setor) {
      alert("Selecione seu setor!");
      return;
    }

    document.getElementById("setorEscolhido").textContent = setor;
    popup.style.display = "none";
    document.getElementById("jogo").style.display = "block";

    carregarFases(setor);
  }
});

function carregarFases(setor) {
  const scriptComum = document.createElement("script");
  scriptComum.src = "/questions/question_comum.js";
  document.body.appendChild(scriptComum);

  const scriptSetor = document.createElement("script");
  scriptSetor.src = `/questions/question_${setor.toLowerCase()}.js`;
  document.body.appendChild(scriptSetor);

  scriptSetor.onload = () => {
    fases = [...fasesComuns, ...fasesEspecificas];
    atualizarTela();
  };
}

function atualizarTela() {
  const fase = fases[faseAtual];
  if (!fase) {
    document.querySelector(".fase").innerHTML = "<h2>Fim da Jornada!</h2>";
    return;
  }

  document.getElementById("titulo-fase").textContent = fase.titulo;
  document.getElementById("descricao-fase").textContent = fase.descricao;

  fase.opcoes.forEach((op, i) => {
    const btn = document.getElementById(`escolha${i + 1}`);
    btn.textContent = op.texto;
    btn.style.display = "inline-block";
  });

  // Oculta botões não usados
  for (let i = fase.opcoes.length; i < 4; i++) {
    document.getElementById(`escolha${i + 1}`).style.display = "none";
  }

  document.getElementById("resultado").textContent = "";
}

function escolher(indice) {
  const opcao = fases[faseAtual].opcoes[indice];

  atributos.resp += opcao.pontos ?? 0;
  atributos.pont += opcao.pontos ?? 0;
  atributos.com += opcao.pontos ?? 0;
  atributos.desem += opcao.pontos ?? 0;

  document.getElementById("resp").textContent = atributos.resp;
  document.getElementById("pont").textContent = atributos.pont;
  document.getElementById("com").textContent = atributos.com;
  document.getElementById("desem").textContent = atributos.desem;

  document.getElementById("resultado").textContent = "Você escolheu: " + opcao.texto;
  faseAtual++;
  setTimeout(atualizarTela, 1000);
}
