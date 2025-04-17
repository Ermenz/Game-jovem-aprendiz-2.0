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
      nomeInput.style.display = "none"; // Esconde o input
    } else if (currentPart < storyParts.length) {
      storyText.textContent = storyParts[currentPart];
      currentPart++;
  
      if (currentPart === storyParts.length) {
        nextBtn.textContent = "Começar Jornada";
        setorSelect.style.display = "block"; // Mostra o seletor de setor
      }
    } else {
      setorEscolhido = setorSelect.value;
      if (setorEscolhido === "") {
        alert("Escolha um setor para começar a jornada!");
        return;
      }
  
      setorSpan.textContent = setorEscolhido;
  
      // Esconde toda a introdução
      popup.style.display = "none";
      setorSelect.style.display = "none";
      nextBtn.style.display = "none";
      storyText.style.display = "none";
  
      // Mostra o jogo
      jogo.style.display = "block";
  
      // Carrega perguntas do setor
      carregarScriptSetor(setorEscolhido);
    }
  });
  