const fases = [
  {
    titulo: "Primeiro Dia",
    descricao: "Você chegou ao trabalho e ninguém veio dar instruções ainda.",
    opcoes: [
      { texto: "Toma a iniciativa e busca orientação com alguém", pontos: 10 },
      { texto: "Fica esperando alguém vir falar", pontos: -2 },
      { texto: "Sai andando pela empresa sem rumo", pontos: -5 },
      { texto: "Fica no celular o tempo todo", pontos: -10 }
    ]
  },
  {
    titulo: "Almoço",
    descricao: "Durante o intervalo, alguns colegas fazem piadas ofensivas.",
    opcoes: [
      { texto: "Ignora e muda de assunto de forma respeitosa", pontos: 5 },
      { texto: "Ri junto para se enturmar", pontos: -2 },
      { texto: "Repreende com educação, pedindo respeito", pontos: 10 },
      { texto: "Filma para postar depois", pontos: -10 }
    ]
  },
  {
    titulo: "Reunião de Equipe",
    descricao: "Você tem uma ideia boa, mas tem receio de falar.",
    opcoes: [
      { texto: "Compartilha com confiança", pontos: 10 },
      { texto: "Fica quieto para não ser julgado", pontos: -2 },
      { texto: "Fala com ironia e deboche", pontos: -5 },
      { texto: "Copia a ideia de outro e se apropria", pontos: -10 }
    ]
  },
  {
    titulo: "Feedback",
    descricao: "Seu supervisor faz críticas construtivas sobre seu desempenho.",
    opcoes: [
      { texto: "Ouve com atenção e busca melhorar", pontos: 10 },
      { texto: "Fica na defensiva", pontos: -2 },
      { texto: "Ignora o feedback", pontos: -5 },
      { texto: "Discute com o supervisor", pontos: -10 }
    ]
  },
  {
    titulo: "E-mail Urgente",
    descricao: "Você recebeu um e-mail importante que requer ação imediata.",
    opcoes: [
      { texto: "Responde prontamente e executa a tarefa", pontos: 10 },
      { texto: "Deixa para depois", pontos: -2 },
      { texto: "Esquece completamente", pontos: -5 },
      { texto: "Apaga sem ler", pontos: -10 }
    ]
  },
  {
    titulo: "Comprometimento",
    descricao: "Faltam 15 minutos para o fim do expediente e uma nova tarefa chega.",
    opcoes: [
      { texto: "Inicia a tarefa e comunica que vai finalizá-la depois", pontos: 5 },
      { texto: "Reclama e se recusa a começar", pontos: -5 },
      { texto: "Começa com disposição", pontos: 10 },
      { texto: "Sai sem avisar ninguém", pontos: -10 }
    ]
  },
  {
    titulo: "Organização",
    descricao: "Sua mesa está sempre bagunçada, e você perde documentos com frequência.",
    opcoes: [
      { texto: "Organiza seus materiais e cria um sistema", pontos: 10 },
      { texto: "Só arruma quando é cobrado", pontos: -2 },
      { texto: "Deixa tudo como está", pontos: -5 },
      { texto: "Joga documentos fora sem olhar", pontos: -10 }
    ]
  },
  {
    titulo: "Conflito",
    descricao: "Você tem um desentendimento com um colega.",
    opcoes: [
      { texto: "Conversa e resolve de forma madura", pontos: 10 },
      { texto: "Fala mal da pessoa para os outros", pontos: -5 },
      { texto: "Evita a pessoa sempre", pontos: -2 },
      { texto: "Cria clima ruim na equipe", pontos: -10 }
    ]
  },
  {
    titulo: "Proatividade",
    descricao: "Um setor precisa de ajuda e está com pouco pessoal hoje.",
    opcoes: [
      { texto: "Se oferece para ajudar no que puder", pontos: 10 },
      { texto: "Finge não saber", pontos: -2 },
      { texto: "Diz que não é sua função", pontos: -5 },
      { texto: "Ignora completamente", pontos: -10 }
    ]
  },
  {
    titulo: "Aprendizado",
    descricao: "Foi oferecido um curso gratuito durante o expediente.",
    opcoes: [
      { texto: "Participa com interesse", pontos: 10 },
      { texto: "Vai por obrigação, mas não presta atenção", pontos: -2 },
      { texto: "Faz corpo mole e tenta escapar", pontos: -5 },
      { texto: "Recusa a participar", pontos: -10 }
    ]
  }
];
