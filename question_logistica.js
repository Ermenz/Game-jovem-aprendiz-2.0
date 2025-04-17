const fases = [
    {
      titulo: "Desafio 1",
      descricao: "Uma carga importante está atrasada. O que você faz?",
      opcoes: [
        { texto: "Entra em contato com o fornecedor e informa seu supervisor", pontos: 10 },
        { texto: "Espera ver se chega até o fim do dia", pontos: -2 },
        { texto: "Culpa outro setor sem investigar", pontos: -5 },
        { texto: "Ignora o problema", pontos: -10 }
      ]
    },
    {
      titulo: "Desafio 2",
      descricao: "Você percebe que os produtos estão sendo armazenados de forma incorreta no estoque.",
      opcoes: [
        { texto: "Sinaliza o erro e ajuda a reorganizar", pontos: 10 },
        { texto: "Faz vista grossa para não se envolver", pontos: -5 },
        { texto: "Reclama com os colegas, mas não faz nada", pontos: -2 },
        { texto: "Tenta arrumar sozinho sem comunicar ninguém", pontos: 2 }
      ]
    },
    {
      titulo: "Desafio 3",
      descricao: "Durante a separação de pedidos, há um item em falta. O que você faz?",
      opcoes: [
        { texto: "Notifica imediatamente o responsável", pontos: 10 },
        { texto: "Substitui por um item parecido sem avisar", pontos: -10 },
        { texto: "Segue com o envio incompleto", pontos: -5 },
        { texto: "Deixa o pedido separado até decidir", pontos: 0 }
      ]
    },
    {
      titulo: "Desafio 4",
      descricao: "Você recebe uma nova planilha de controle de estoque. O que faz?",
      opcoes: [
        { texto: "Aprende a usar e aplica no dia a dia", pontos: 10 },
        { texto: "Ignora e continua com o método antigo", pontos: -5 },
        { texto: "Reclama que é complicado", pontos: -2 },
        { texto: "Pede ajuda para entender", pontos: 5 }
      ]
    },
    {
      titulo: "Desafio 5",
      descricao: "Um fornecedor chegou com a entrega fora do horário. O que você faz?",
      opcoes: [
        { texto: "Registra o ocorrido e avisa a supervisão", pontos: 10 },
        { texto: "Deixa passar para não causar confusão", pontos: 0 },
        { texto: "Briga com o motorista", pontos: -10 },
        { texto: "Recebe a carga sem conferência", pontos: -5 }
      ]
    },
    {
      titulo: "Desafio 6",
      descricao: "Faltam EPIs para a equipe de carga. O que você faz?",
      opcoes: [
        { texto: "Interrompe a atividade até resolver", pontos: 10 },
        { texto: "Continua sem usar os EPIs", pontos: -10 },
        { texto: "Pede para o colega resolver", pontos: -2 },
        { texto: "Sinaliza o problema no grupo da equipe", pontos: 5 }
      ]
    },
    {
      titulo: "Desafio 7",
      descricao: "Você vê um colega carregando caixas de forma perigosa. O que faz?",
      opcoes: [
        { texto: "Orienta sobre a forma correta", pontos: 10 },
        { texto: "Filma e manda no grupo para zoar", pontos: -10 },
        { texto: "Finge que não viu", pontos: -5 },
        { texto: "Chama alguém da segurança do trabalho", pontos: 5 }
      ]
    },
    {
      titulo: "Desafio 8",
      descricao: "O sistema de controle de entrada de veículos caiu. O que faz?",
      opcoes: [
        { texto: "Organiza a fila e anota manualmente", pontos: 10 },
        { texto: "Diz que não é sua responsabilidade", pontos: -5 },
        { texto: "Abandona o local", pontos: -10 },
        { texto: "Espera voltar sem tomar providências", pontos: -2 }
      ]
    },
    {
      titulo: "Desafio 9",
      descricao: "Você tem que preparar um carregamento extra urgente. O que faz?",
      opcoes: [
        { texto: "Prioriza o pedido e coordena a equipe", pontos: 10 },
        { texto: "Finge que não viu a solicitação", pontos: -10 },
        { texto: "Reclama da urgência e demora a começar", pontos: -5 },
        { texto: "Começa sem planejar", pontos: 0 }
      ]
    },
    {
      titulo: "Desafio 10",
      descricao: "Chega uma nova remessa de materiais. Como você confere?",
      opcoes: [
        { texto: "Compara nota fiscal com a carga", pontos: 10 },
        { texto: "Aceita a entrega sem olhar", pontos: -5 },
        { texto: "Confia só no que o motorista disse", pontos: -2 },
        { texto: "Confere parcialmente", pontos: 0 }
      ]
    }
  ];
  