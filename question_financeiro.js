const fases = [
    {
      titulo: "Desafio 1",
      descricao: "Você percebe uma inconsistência nos relatórios de despesas mensais.",
      opcoes: [
        { texto: "Investiga a fundo e reporta ao gestor", pontos: 10 },
        { texto: "Ignora e continua o trabalho normalmente", pontos: -5 },
        { texto: "Altera os dados para que batam com o esperado", pontos: -10 },
        { texto: "Comenta com colegas, mas não toma ação", pontos: -2 }
      ]
    },
    {
      titulo: "Desafio 2",
      descricao: "Seu chefe pede um levantamento financeiro urgente.",
      opcoes: [
        { texto: "Organiza rapidamente com precisão e entrega no prazo", pontos: 10 },
        { texto: "Entrega algo incompleto para adiantar", pontos: -2 },
        { texto: "Faz com pressa e comete erros", pontos: -5 },
        { texto: "Diz que está ocupado e adia por conta própria", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 3",
      descricao: "Você descobre um pagamento duplicado feito a um fornecedor.",
      opcoes: [
        { texto: "Comunica imediatamente e corrige a falha", pontos: 10 },
        { texto: "Finge que não viu e espera que alguém descubra", pontos: -5 },
        { texto: "Aponta o erro para outro setor assumir", pontos: -2 },
        { texto: "Apaga o registro e espera passar despercebido", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 4",
      descricao: "Um colega tem dúvidas sobre o sistema de controle de gastos.",
      opcoes: [
        { texto: "Explica com calma e oferece ajuda", pontos: 10 },
        { texto: "Ignora e diz que ele deve aprender sozinho", pontos: -2 },
        { texto: "Diz que está muito ocupado", pontos: -5 },
        { texto: "Zomba das dúvidas dele", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 5",
      descricao: "A equipe precisa fechar o balanço do mês com urgência.",
      opcoes: [
        { texto: "Colabora com foco e organização", pontos: 10 },
        { texto: "Ajuda parcialmente, mas se distrai fácil", pontos: -2 },
        { texto: "Evita responsabilidades maiores", pontos: -5 },
        { texto: "Deixa a equipe sozinha e sai mais cedo", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 6",
      descricao: "Você foi escalado para apresentar os dados financeiros à diretoria.",
      opcoes: [
        { texto: "Prepara-se bem e apresenta com clareza", pontos: 10 },
        { texto: "Faz a apresentação, mas sem segurança", pontos: 0 },
        { texto: "Gagueja, demonstra despreparo e confunde números", pontos: -5 },
        { texto: "Recusa apresentar por medo de errar", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 7",
      descricao: "Durante o controle de caixa, você encontra valores não registrados.",
      opcoes: [
        { texto: "Investiga imediatamente a origem e documenta", pontos: 10 },
        { texto: "Ignora, pois o saldo final bate", pontos: -2 },
        { texto: "Informa verbalmente, mas não registra", pontos: -5 },
        { texto: "Esconde para não ter problemas", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 8",
      descricao: "Você precisa revisar notas fiscais de um novo projeto.",
      opcoes: [
        { texto: "Verifica uma a uma com atenção aos detalhes", pontos: 10 },
        { texto: "Confia que estão corretas e só assina", pontos: -2 },
        { texto: "Confunde os lançamentos e altera datas", pontos: -5 },
        { texto: "Delega sem ao menos conferir", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 9",
      descricao: "Um erro na planilha causou confusão no pagamento dos colaboradores.",
      opcoes: [
        { texto: "Assume o erro e resolve rapidamente", pontos: 10 },
        { texto: "Culpa outro setor", pontos: -5 },
        { texto: "Demora para tomar atitude", pontos: -2 },
        { texto: "Finge que não é com você", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 10",
      descricao: "Você recebe um treinamento sobre um novo sistema financeiro.",
      opcoes: [
        { texto: "Participa ativamente e faz anotações", pontos: 10 },
        { texto: "Assiste com desatenção", pontos: -2 },
        { texto: "Finge que está presente, mas faz outra coisa", pontos: -5 },
        { texto: "Falta sem justificar", pontos: -10 }
      ]
    }
  ];
  