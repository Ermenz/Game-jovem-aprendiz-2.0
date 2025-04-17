const fases = [
    {
      titulo: "Desafio 1",
      descricao: "Você precisa criar uma campanha para divulgar um novo produto, mas não recebeu todas as informações. O que faz?",
      opcoes: [
        { texto: "Pede os dados completos para o gerente", pontos: 10 },
        { texto: "Tenta criar algo com o que já tem", pontos: 0 },
        { texto: "Inventa os dados", pontos: -10 },
        { texto: "Copia uma campanha antiga", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 2",
      descricao: "O cliente fez uma crítica pública à marca nas redes sociais. O que você faz?",
      opcoes: [
        { texto: "Responde com empatia e tenta resolver", pontos: 10 },
        { texto: "Ignora a crítica", pontos: -5 },
        { texto: "Apaga o comentário", pontos: -10 },
        { texto: "Faz uma nota pública de esclarecimento", pontos: 5 }
      ]
    },
    {
      titulo: "Desafio 3",
      descricao: "Seu supervisor pede ideias criativas para a próxima campanha. O que você faz?",
      opcoes: [
        { texto: "Pesquisa tendências e apresenta ideias novas", pontos: 10 },
        { texto: "Reutiliza ideias antigas", pontos: 0 },
        { texto: "Espera alguém sugerir algo", pontos: -5 },
        { texto: "Faz qualquer coisa só para entregar", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 4",
      descricao: "Durante a reunião, você tem uma boa ideia, mas sente vergonha de falar. O que faz?",
      opcoes: [
        { texto: "Compartilha a ideia com confiança", pontos: 10 },
        { texto: "Anota para falar depois", pontos: 2 },
        { texto: "Fica calado", pontos: -5 },
        { texto: "Fala só se alguém incentivar", pontos: 0 }
      ]
    },
    {
      titulo: "Desafio 5",
      descricao: "Você precisa entregar um relatório de desempenho, mas o sistema travou. O que faz?",
      opcoes: [
        { texto: "Informa o problema e procura alternativas", pontos: 10 },
        { texto: "Diz que esqueceu", pontos: -5 },
        { texto: "Envia incompleto", pontos: -2 },
        { texto: "Faz um relatório inventado", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 6",
      descricao: "Te pedem para revisar o texto de uma campanha. O que você faz?",
      opcoes: [
        { texto: "Revisa com atenção aos detalhes", pontos: 10 },
        { texto: "Apenas lê rapidamente", pontos: 0 },
        { texto: "Passa para outra pessoa revisar", pontos: -2 },
        { texto: "Diz que está bom sem revisar", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 7",
      descricao: "Um colega do setor precisa de ajuda para criar um post urgente. Você está ocupado. O que faz?",
      opcoes: [
        { texto: "Vê se pode ajudar depois que terminar", pontos: 5 },
        { texto: "Ajuda mesmo com outras tarefas pendentes", pontos: 2 },
        { texto: "Recusa educadamente", pontos: 0 },
        { texto: "Ignora a mensagem", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 8",
      descricao: "Você é responsável por agendar publicações, mas esqueceu uma. O que faz?",
      opcoes: [
        { texto: "Admite o erro e agenda o mais rápido possível", pontos: 10 },
        { texto: "Culpa o sistema", pontos: -5 },
        { texto: "Finge que não sabia", pontos: -10 },
        { texto: "Corrige sem avisar ninguém", pontos: 2 }
      ]
    },
    {
      titulo: "Desafio 9",
      descricao: "A diretoria quer entender o impacto da última campanha. O que você faz?",
      opcoes: [
        { texto: "Cria um relatório com dados reais e claros", pontos: 10 },
        { texto: "Apresenta só os dados positivos", pontos: -2 },
        { texto: "Enrola com palavras técnicas", pontos: -5 },
        { texto: "Diz que ainda não tem os dados", pontos: 0 }
      ]
    },
    {
      titulo: "Desafio 10",
      descricao: "Você recebe um elogio pelo seu desempenho. Como reage?",
      opcoes: [
        { texto: "Agradece com humildade e continua focado", pontos: 10 },
        { texto: "Se gaba para os colegas", pontos: -5 },
        { texto: "Finge que não foi nada", pontos: 0 },
        { texto: "Posta nas redes sociais para se exibir", pontos: -2 }
      ]
    }
  ];
  