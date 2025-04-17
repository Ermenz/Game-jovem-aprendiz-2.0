const fases = [
    {
      titulo: "Desafio 1",
      descricao: "Um colaborador procura o RH para relatar um problema com seu salário.",
      opcoes: [
        { texto: "Escuta com atenção e investiga a situação", pontos: 10 },
        { texto: "Diz que não é com você e encaminha sem explicação", pontos: -2 },
        { texto: "Ignora o colaborador e continua no computador", pontos: -10 },
        { texto: "Promete resolver, mas esquece de verificar", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 2",
      descricao: "Você precisa organizar uma integração para novos funcionários.",
      opcoes: [
        { texto: "Prepara uma apresentação clara e acolhedora", pontos: 10 },
        { texto: "Faz algo rápido, sem muitos detalhes", pontos: 0 },
        { texto: "Diz que não sabe como fazer e deixa pra outro dia", pontos: -5 },
        { texto: "Não prepara nada e improvisa na hora", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 3",
      descricao: "Um funcionário demonstra sinais de estresse e desmotivação.",
      opcoes: [
        { texto: "Conversa com ele e oferece apoio", pontos: 10 },
        { texto: "Aconselha procurar um psicólogo externo", pontos: 2 },
        { texto: "Diz que ele deve separar pessoal e profissional", pontos: -5 },
        { texto: "Faz piada sobre o comportamento dele", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 4",
      descricao: "Um colega do RH falta com frequência e sobrecarrega os demais.",
      opcoes: [
        { texto: "Conversa com ele de forma respeitosa", pontos: 10 },
        { texto: "Faz fofoca com outros colegas", pontos: -5 },
        { texto: "Ignora o problema", pontos: -2 },
        { texto: "Discute com ele na frente dos outros", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 5",
      descricao: "Seu gestor pede que atualize os cadastros de todos os funcionários.",
      opcoes: [
        { texto: "Organiza tudo e cumpre a tarefa com atenção", pontos: 10 },
        { texto: "Faz o básico, sem verificar dados", pontos: -2 },
        { texto: "Entrega com erros e não revisa", pontos: -5 },
        { texto: "Adia por vários dias sem motivo", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 6",
      descricao: "Você está encarregado de criar uma campanha interna de valorização.",
      opcoes: [
        { texto: "Cria algo criativo e que envolva todos", pontos: 10 },
        { texto: "Repete a campanha do ano passado", pontos: 0 },
        { texto: "Faz algo simples e pouco atrativo", pontos: -2 },
        { texto: "Não faz nada por falta de tempo", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 7",
      descricao: "Um funcionário está insatisfeito com sua equipe.",
      opcoes: [
        { texto: "Media uma conversa com todos os envolvidos", pontos: 10 },
        { texto: "Orienta a buscar o gestor", pontos: 2 },
        { texto: "Diz que não é da sua conta", pontos: -5 },
        { texto: "Ignora a reclamação", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 8",
      descricao: "Você deve analisar currículos para uma nova vaga.",
      opcoes: [
        { texto: "Lê com atenção e seleciona os mais compatíveis", pontos: 10 },
        { texto: "Seleciona por aparência do currículo", pontos: -2 },
        { texto: "Escolhe qualquer um para terminar logo", pontos: -5 },
        { texto: "Deixa o processo atrasar", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 9",
      descricao: "Um colaborador novo não entendeu as normas da empresa.",
      opcoes: [
        { texto: "Explica com paciência e reforça as orientações", pontos: 10 },
        { texto: "Diz para ele ler o regulamento sozinho", pontos: -2 },
        { texto: "Zomba da dúvida dele", pontos: -10 },
        { texto: "Responde com má vontade", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 10",
      descricao: "Você tem um treinamento importante para ministrar amanhã.",
      opcoes: [
        { texto: "Se prepara com antecedência e revisa o conteúdo", pontos: 10 },
        { texto: "Lê rapidamente no dia anterior", pontos: 0 },
        { texto: "Vai sem estudar e improvisa", pontos: -5 },
        { texto: "Chega atrasado e desorganizado", pontos: -10 }
      ]
    }
  ];
  