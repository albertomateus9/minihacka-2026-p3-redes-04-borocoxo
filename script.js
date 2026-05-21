// Banco de Dados de Recomendações (8 sentimentos x 7 categorias)
const recommendations = {
  novo: {
    filme: {
      title: "Everything Everywhere All at Once",
      desc: "Uma imigrante chinesa idosa se envolve em uma aventura insana no multiverso, descobrindo que o destino do mundo depende de suas outras versões.",
      why: "Uma experiência audiovisual revolucionária, misturando drama familiar, ação impecável e comédia absurda de um jeito nunca visto.",
      tag: "🎬 FILME",
      feeling: "🆕 Algo novo"
    },
    serie: {
      title: "Severance (Ruptura)",
      desc: "Neste suspense tecnológico, funcionários de uma empresa aceitam passar por uma cirurgia que divide cirurgicamente suas memórias profissionais das pessoais.",
      why: "Roteiro original brilhante que provoca discussões profundas sobre o equilíbrio de trabalho, vida e identidade.",
      tag: "📺 SÉRIE",
      feeling: "🆕 Algo novo"
    },
    jogo: {
      title: "Gris / House (v1.4)",
      desc: "Gris acompanha uma jovem que lida com o luto através de uma jornada artística em aquarela. House é um suspense tenso em pixel art focado em resolver mistérios domésticos e salvar sua família.",
      why: "Duas propostas independentes excepcionais que reinventam narrativas visuais e mecânicas de gameplay de formas únicas.",
      tag: "🎮 JOGO",
      feeling: "🆕 Algo novo"
    },
    musica: {
      title: "Polyphia - New Levels New Devils",
      desc: "Um álbum instrumental de math-rock progressivo que mescla guitarras absurdamente técnicas com batidas de trap e hip-hop eletrônico.",
      why: "Som fresco e inovador que desafia os limites do que se espera de uma banda de rock convencional.",
      tag: "🎵 MÚSICA",
      feeling: "🆕 Algo novo"
    },
    externa: {
      title: "Explorar Geocaching na sua Cidade",
      desc: "Use o aplicativo oficial do Geocaching no celular para rastrear pequenos recipientes (tesouros) escondidos no mundo real ao seu redor.",
      why: "Uma caça ao tesouro urbana que faz você prestar atenção em detalhes e lugares que você passa todo dia sem notar.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "🆕 Algo novo"
    },
    casa: {
      title: "Aprender o Básico de Origami 3D",
      desc: "Pegue papéis quadrados coloridos ou folhas comuns cortadas e assista a tutoriais para dobrar um Tsuru (garça) ou outras formas geométricas.",
      why: "Uma excelente introdução a uma habilidade manual geométrica que treina a paciência e a concentração fina.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "🆕 Algo novo"
    },
    amigos: {
      title: "Keep Talking and Nobody Explodes",
      desc: "Um jogo social cooperativo onde uma pessoa tenta desarmar uma bomba física em uma tela virtual e os outros amigos leem as instruções de um manual impresso.",
      why: "Gera comunicação intensa, momentos hilários sob pressão e exercita o trabalho em equipe.",
      tag: "👥 COM AMIGOS",
      feeling: "🆕 Algo novo"
    }
  },
  rir: {
    filme: {
      title: "Superbad (É Hoje)",
      desc: "Dois melhores amigos enfrentam uma série de desventuras cômicas ao tentar comprar bebidas alcoólicas para uma festa do ensino médio.",
      why: "Diálogos rápidos improvisados e química fenomenal entre o elenco que criaram uma das comédias mais marcantes da geração.",
      tag: "🎬 FILME",
      feeling: "😂 Rir"
    },
    serie: {
      title: "Brooklyn Nine-Nine",
      desc: "Acompanhe o dia a dia hilário dos detetives de uma delegacia do Brooklyn liderada por um capitão sério e um detetive brilhante e infantil.",
      why: "Episódios rápidos, piadas sagazes, personagens amáveis e muito humor físico de fácil digestão.",
      tag: "📺 SÉRIE",
      feeling: "😂 Rir"
    },
    jogo: {
      title: "Untitled Goose Game",
      desc: "Você joga no papel de um ganso travesso em um vilarejo pacato, cuja única missão na vida é roubar objetos e pregar peças nos moradores.",
      why: "Simplesmente hilário fazer as pessoas se irritarem com grasnidos irritantes e brincadeiras físicas.",
      tag: "🎮 JOGO",
      feeling: "😂 Rir"
    },
    musica: {
      title: "Músicas Cômicas e Paródias Brasileiras",
      desc: "De clássicos do Mamonas Assassinas a canções humorísticas de Hermes e Renato ou paródias modernas do YouTube.",
      why: "Letras absurdas e ritmos animados que ajudam a aliviar instantaneamente a tensão através do riso.",
      tag: "🎵 MÚSICA",
      feeling: "😂 Rir"
    },
    externa: {
      title: "Ir a um Show de Stand-Up local",
      desc: "Procure bares ou teatros na sua cidade que organizem noites de comédia 'Open Mic' ou apresentações de humoristas convidados.",
      why: "Rir coletivamente com apresentações ao vivo é uma experiência social contagiante.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "😂 Rir"
    },
    casa: {
      title: "Sessão de Dublagens de Vídeos Antigos",
      desc: "Coloque clipes clássicos, novelas ou discursos na TV no mudo e tente criar falas absurdas dublando as vozes com seus próprios efeitos.",
      why: "Gera momentos absurdamente cômicos com pouquíssimo preparo.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "😂 Rir"
    },
    amigos: {
      title: "Gartic Phone (Telefone Sem Fio Virtual)",
      desc: "Reúna o grupo no computador ou celular para jogar esta combinação maluca de desenhos rápidos com descrições de frases.",
      why: "A distorção progressiva dos desenhos originais sempre resulta em revelações extremamente engraçadas.",
      tag: "👥 COM AMIGOS",
      feeling: "😂 Rir"
    }
  },
  chorar: {
    filme: {
      title: "Sempre ao Seu Lado (Hachiko)",
      desc: "A comovente história real de um professor universitário e o cachorro da raça Akita que o aguardava na estação de trem todos os dias, mesmo após sua morte.",
      why: "Uma ode profunda sobre lealdade animal e amor puro que amolece até os corações mais duros.",
      tag: "🎬 FILME",
      feeling: "😢 Chorar"
    },
    serie: {
      title: "This Is Us",
      desc: "A emocionante saga multigeracional da família Pearson, navegando por traumas de infância, amor, perdas e conexões familiares únicas.",
      why: "Roteiro incrivelmente sensível que constrói picos dramáticos perfeitos para desabafar as emoções em prantos.",
      tag: "📺 SÉRIE",
      feeling: "😢 Chorar"
    },
    jogo: {
      title: "Before Your Eyes",
      desc: "Uma jornada narrativa onde você revisita a vida de uma alma recém-falecida, com o tempo passando apenas toda vez que você pisca sua câmera real.",
      why: "Mecânica revolucionária ligada à biologia humana que culmina em uma das conclusões mais tristes e belas dos videogames.",
      tag: "🎮 JOGO",
      feeling: "😢 Chorar"
    },
    musica: {
      title: "Adele — 21 (Álbum)",
      desc: "O icônico álbum de estúdio que consolidou Adele, repleto de baladas poderosas sobre desilusão amorosa, perda e aceitação.",
      why: "Vocais carregados de dor e arranjos de piano perfeitos para ouvir de olhos fechados e chorar.",
      tag: "🎵 MÚSICA",
      feeling: "😢 Chorar"
    },
    externa: {
      title: "Ver o Entardecer em um Ponto Alto",
      desc: "Encontre uma colina, mirante ou terraço no fim de tarde e apenas observe a transição do dia para a noite em silêncio.",
      why: "O espetáculo melancólico do pôr do sol estimula a reflexão profunda e a liberação de sentimentos guardados.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "😢 Chorar"
    },
    casa: {
      title: "Escrever um Diário de Desabafo Sincero",
      desc: "Pegue papel e caneta e escreva livremente sobre suas frustrações, medos ou saudades sem se preocupar com estrutura ou correção.",
      why: "Colocar dores no papel ativa processos catárticos e ajuda a liberar lágrimas reprimidas.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "😢 Chorar"
    },
    amigos: {
      title: "Roda de Conversa Íntima e Vulnerável",
      desc: "Junte seus amigos mais próximos em um ambiente calmo para conversarem abertamente sobre momentos difíceis que passaram ou dores atuais.",
      why: "O choro compartilhado em um espaço seguro fortalece a empatia e cria laços inquebráveis de apoio.",
      tag: "👥 COM AMIGOS",
      feeling: "😢 Chorar"
    }
  },
  nostalgico: {
    filme: {
      title: "De Volta para o Futuro (Trilogia)",
      desc: "Um jovem viaja acidentalmente no tempo para os anos 50 usando uma máquina do tempo criada em um carro DeLorean por um cientista excêntrico.",
      why: "Aventura clássica impecável com trilha sonora enérgica e o puro charme dos anos 80.",
      tag: "🎬 FILME",
      feeling: "⏳ Nostálgico"
    },
    serie: {
      title: "Avatar: A Lenda de Aang",
      desc: "Um garoto de 12 anos e seus amigos lutam para restaurar o equilíbrio do mundo dominado pela tirania da Nação do Fogo.",
      why: "Desenho clássico com lições morais maduras, humor afiado e desenvolvimento primoroso que marcou a infância de milhões.",
      tag: "📺 SÉRIE",
      feeling: "⏳ Nostálgico"
    },
    jogo: {
      title: "Street Fighter II",
      desc: "O maior clássico de luta dos arcades dos anos 90, permitindo escolher entre guerreiros icônicos para disputar combates pelo mundo.",
      why: "Recria a pura atmosfera mágica das lojas de fliperama e dos salões de jogos do passado.",
      tag: "🎮 JOGO",
      feeling: "⏳ Nostálgico"
    },
    musica: {
      title: "Hits Pop-Rock Anos 2000 (Playlist)",
      desc: "Reviva o som de bandas como CPM 22, Charlie Brown Jr, NX Zero, Blink-182, Linkin Park e outros sucessos das antigas rádios.",
      why: "Desperta instantaneamente memórias escolares, da adolescência e de momentos mais simples da vida.",
      tag: "🎵 MÚSICA",
      feeling: "⏳ Nostálgico"
    },
    externa: {
      title: "Visitar Locais Relevantes do seu Passado",
      desc: "Faça uma visita à praça onde costumava brincar, a escola onde estudou na infância ou ao bairro antigo onde morou.",
      why: "Reconectar-se fisicamente com espaços passados resgata memórias sensoriais incríveis.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "⏳ Nostálgico"
    },
    casa: {
      title: "Ver Álbuns de Fotos Físicas ou Antigas",
      desc: "Abra caixas antigas de registros familiares, fotos impressas que desbotaram com o tempo ou arquivos digitais de anos passados.",
      why: "Relembrar rostos, roupas e sorrisos antigos evoca uma nostalgia aconchegante incomparável.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "⏳ Nostálgico"
    },
    amigos: {
      title: "Jogar Videogames Clássicos em Co-Op",
      desc: "Emule ou ligue um console antigo para jogar Mario Kart, Super Mario World ou fighting games com os amigos no mesmo sofá.",
      why: "A rivalidade divertida na mesma tela relembra as tardes livres de deveres da juventude.",
      tag: "👥 COM AMIGOS",
      feeling: "⏳ Nostálgico"
    }
  },
  problemas: {
    filme: {
      title: "A Viagem de Chihiro",
      desc: "Uma garota de 10 anos se perde em um reino governado por deuses, espíritos e uma bruxa má, precisando resgatar seus pais transformados em porcos.",
      why: "Uma das obras-primas mais envolventes e mágicas do cinema que transporta sua mente inteiramente para longe dos problemas reais.",
      tag: "🎬 FILME",
      feeling: "🌌 Esquecer os problemas"
    },
    serie: {
      title: "The Good Place",
      desc: "Após morrer, uma mulher egoísta é enviada por engano ao 'Lugar Bom' (o paraíso) e faz de tudo para ocultar sua verdadeira identidade moral.",
      why: "Uma comédia filosófica extremamente leve, com reviravoltas criativas que distraem a cabeça das pressões diárias.",
      tag: "📺 SÉRIE",
      feeling: "🌌 Esquecer os problemas"
    },
    jogo: {
      title: "Katamari Damacy Reroll",
      desc: "Controle um pequeno príncipe espacial rolando uma bola adesiva gigante que atrai tudo pelo caminho, desde tachinhas a prédios inteiros.",
      why: "Gameplay bizarro altamente satisfatório que desliga completamente os pensamentos estressantes.",
      tag: "🎮 JOGO",
      feeling: "🌌 Esquecer os problemas"
    },
    musica: {
      title: "Lofi Hip Hop Radio - Beats to Relax/Study",
      desc: "Transmissões e playlists instrumentais contínuas com batidas suaves de jazz, loops confortáveis e ruídos nostálgicos de vinil.",
      why: "Música de fundo perfeita para reduzir a frequência cardíaca e afastar ruídos mentais.",
      tag: "🎵 MÚSICA",
      feeling: "🌌 Esquecer os problemas"
    },
    externa: {
      title: "Caminhada de Atenção Plena sem Celular",
      desc: "Caminhe por 30 minutos em um ambiente arborizado, mantendo o celular guardado e prestando atenção em cinco coisas que pode ver e ouvir.",
      why: "Conectar-se com os sentidos corporais ajuda a ancorar a mente no presente, longe da ansiedade.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "🌌 Esquecer os problemas"
    },
    casa: {
      title: "Banho Quente com Iluminação Suave",
      desc: "Tome um banho morno demorado, apague as luzes principais e use velas ou luzes indiretas ao som de barulho de chuva.",
      why: "Relaxamento térmico e sensorial que limpa a fadiga física e drena o estresse do cérebro.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "🌌 Esquecer os problemas"
    },
    amigos: {
      title: "Fazer uma Noite de Pizza e Jogos Casuais",
      desc: "Reúna as pessoas para comer pizza e jogar cartas ou jogos de tabuleiro rápidos (ex: Uno ou Dixit) que não demandem muito raciocínio sério.",
      why: "A distração social leve ajuda a oxigenar os pensamentos em boa companhia.",
      tag: "👥 COM AMIGOS",
      feeling: "🌌 Esquecer os problemas"
    }
  },
  aconchegante: {
    filme: {
      title: "Meu Vizinho Totoro",
      desc: "Duas garotas se mudam para o campo para ficar perto da mãe doente e descobrem que a floresta vizinha é cheia de espíritos mágicos e amigáveis.",
      why: "Um filme doce, sem vilões ou grandes ameaças, transbordando paz, inocência e aconchego campestre.",
      tag: "🎬 FILME",
      feeling: "☕ Aconchegante"
    },
    serie: {
      title: "Gilmore Girls",
      desc: "Acompanhe as conversas rápidas, dilemas românticos e a rotina cheia de café de Lorelai e sua filha Rory na pitoresca cidadezinha de Stars Hollow.",
      why: "Clima outonal reconfortante que dá a sensação de estar enrolado em um cobertor quente.",
      tag: "📺 SÉRIE",
      feeling: "☕ Aconchegante"
    },
    jogo: {
      title: "Stardew Valley / Unpacking",
      desc: "Stardew Valley convida você a herdar a velha fazenda do seu avô e viver no campo. Unpacking é um jogo de quebra-cabeça zen sobre a sensação reconfortante de arrumar itens nas prateleiras ao mudar de casa.",
      why: "Jogabilidade pacífica focada no cuidado e organização, sem tempo limite, estresse ou combates punitivos.",
      tag: "🎮 JOGO",
      feeling: "☕ Aconchegante"
    },
    musica: {
      title: "Coffee Shop Acoustic & Folk",
      desc: "Músicas com instrumentação de cordas acústicas, piano melódico e vocais calorosos de artistas folk como Iron & Wine e Kings of Convenience.",
      why: "Cria uma atmosfera intimista perfeita para relaxar, tomar um chá ou cochilar nas tardes de chuva.",
      tag: "🎵 MÚSICA",
      feeling: "☕ Aconchegante"
    },
    externa: {
      title: "Visitar uma Livraria-Café Charmosa",
      desc: "Vá a uma pequena livraria aconchegante, escolha um livro para folhear e sente para beber um café com bolo.",
      why: "Ambientes cercados de livros e aroma de café trazem paz instantânea e estimulam um ritmo lento de vida.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "☕ Aconchegante"
    },
    casa: {
      title: "Preparar uma Bebida Quente e Ler no Sofá",
      desc: "Faça um chocolate quente cremoso ou um chá de camomila aromático, vista roupas confortáveis e leia sob luz de leitura suave.",
      why: "A definição clássica de bem-estar caseiro dinamarquês (Hyggelig) que restaura a energia interna.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "☕ Aconchegante"
    },
    amigos: {
      title: "Piquenique ou Lanche da Tarde Caseiro",
      desc: "Convide amigos para levar bolos caseiros, biscoitos e bebidas quentes em um jardim ou quintal para passar a tarde conversando sob o sol fraco.",
      why: "Conversas informais sem pressa recarregam o afeto social com leveza.",
      tag: "👥 COM AMIGOS",
      feeling: "☕ Aconchegante"
    }
  },
  inspirado: {
    filme: {
      title: "Sociedade dos Poetas Mortos",
      desc: "Um professor de poesia nada ortodoxo usa métodos alternativos para inspirar seus alunos a irem contra as tradições rígidas do colégio interno.",
      why: "A icônica lição do 'Carpe Diem' (Aproveite o Dia) que nos motiva a valorizar nossa própria voz e o poder da arte.",
      tag: "🎬 FILME",
      feeling: "✨ Inspirado"
    },
    serie: {
      title: "Cosmos: Uma Odisseia no Espaço-Tempo",
      desc: "Uma extraordinária exploração científica do nosso lugar no cosmos, revelando a escala do espaço e do tempo através de narrativas visuais brilhantes.",
      why: "Faz a gente se sentir parte de algo gigantesco e desperta a curiosidade intelectual sobre a vida no universo.",
      tag: "📺 SÉRIE",
      feeling: "✨ Inspirado"
    },
    jogo: {
      title: "Journey",
      desc: "Explore ruínas misteriosas flutuando em um deserto infinito, avançando em direção a uma montanha mística. Não há palavras ou textos, apenas trilha sonora orquestral dinâmica.",
      why: "Uma jornada comovente sobre a vida, superação e conexões rápidas com desconhecidos que redefine os videogames como arte.",
      tag: "🎮 JOGO",
      feeling: "✨ Inspirado"
    },
    musica: {
      title: "Trilhas Sonoras de Hans Zimmer (Instrumental)",
      desc: "Composições monumentais de filmes como Interstellar, Inception e Gladiator, famosas por sua escala sonora maciça e progressões inspiradoras.",
      why: "O som instrumental épico estimula a imaginação criativa e melhora drasticamente o foco de quem cria.",
      tag: "🎵 MÚSICA",
      feeling: "✨ Inspirado"
    },
    externa: {
      title: "Caminhar para Tirar Fotos de Arquitetura",
      desc: "Saia com seu celular ou câmera com o objetivo explícito de capturar formas geométricas interessantes, sombras ou cores incomuns nas ruas.",
      why: "Muda seu foco visual ativo e treina o cérebro a enxergar beleza em coisas comuns do dia a dia.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "✨ Inspirado"
    },
    casa: {
      title: "Criar um Quadro de Metas Visuais",
      desc: "Recorte jornais, revistas ou monte um painel digital no Pinterest reunindo imagens que ilustrem seus grandes sonhos e objetivos de vida.",
      why: "Visualizar seus propósitos diariamente ajuda a direcionar seu subconsciente para a ação criativa.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "✨ Inspirado"
    },
    amigos: {
      title: "Noite de Brainstorming de Negócios ou Viagens",
      desc: "Reúna as mentes criativas do seu círculo e passem a noite desenhando projetos fictícios, ideias de aplicativos absurdos ou roteiros de viagens de aventura.",
      why: "Alimentar-se do entusiasmo alheio gera uma energia criativa fantástica e insights práticos reais.",
      tag: "👥 COM AMIGOS",
      feeling: "✨ Inspirado"
    }
  },
  animado: {
    filme: {
      title: "Megamente",
      desc: "O vilão alienígena azul Megamente derrota acidentalmente seu arqui-inimigo Metro Man, mas se vê entediado sem um herói para combater, decidindo criar um novo rival.",
      why: "Visual eletrizante, ritmo acelerado e clássicos do rock (AC/DC, Ozzy Osbourne) que deixam qualquer um pilhado de energia.",
      tag: "🎬 FILME",
      feeling: "⚡ Animado"
    },
    serie: {
      title: "Cobra Kai",
      desc: "Décadas depois do torneio que mudou suas vidas, a rivalidade de caratê entre Johnny Lawrence e Daniel LaRusso ressurge de forma explosiva em uma nova geração.",
      why: "Roteiro dinâmico, trilha oitentista empolgante e muitas lutas coreografadas que dão ânimo imediato.",
      tag: "📺 SÉRIE",
      feeling: "⚡ Animado"
    },
    jogo: {
      title: "Rocket League",
      desc: "Uma mistura veloz de futebol com carros esportivos movidos a foguete em partidas competitivas onde acrobacias aéreas são cruciais.",
      why: "Ação constante que demanda reflexos ágeis, com gols espetaculares de tirar o fôlego.",
      tag: "🎮 JOGO",
      feeling: "⚡ Animado"
    },
    musica: {
      title: "Upbeat Electro Swing / Synthwave",
      desc: "Músicas que fundem o ritmo frenético do jazz swing dos anos 30 com sintetizadores eletrônicos de pista de dança ou batidas futuristas rápidas.",
      why: "O ritmo sincopado e contagiante acelera o ritmo de trabalho doméstico ou exercícios físicos.",
      tag: "🎵 MÚSICA",
      feeling: "⚡ Animado"
    },
    externa: {
      title: "Ir Correr ao Som de Batidas Rápidas",
      desc: "Calce tênis confortáveis e faça um trote ou corrida de 20 minutos no parque ouvindo playlists com ritmos rápidos de bateria.",
      why: "Exercícios intensos liberam dopamina e endorfinas que turbinam o humor do resto do dia.",
      tag: "🌳 ATIVIDADE EXTERNA",
      feeling: "⚡ Animado"
    },
    casa: {
      title: "Dança Livre sem Regras na Sala",
      desc: "Coloque uma das suas músicas de dança mais amadas com o volume alto e gaste energia pulando e dançando livremente por 5 minutos.",
      why: "Gasto calórico rápido e relaxamento de tensões físicas que traz um bem-estar enérgico imediato.",
      tag: "🏠 ATIVIDADE EM CASA",
      feeling: "⚡ Animado"
    },
    amigos: {
      title: "Praticar Vôlei ou Esportes Dinâmicos",
      desc: "Alugue uma quadra de areia ou vá a um parque aberto jogar vôlei, futebol ou queimada com um grupo grande de conhecidos.",
      why: "A competição amigável enérgica e o trabalho em equipe liberam uma vibração social estimulante.",
      tag: "👥 COM AMIGOS",
      feeling: "⚡ Animado"
    }
  }
};

// Seletores DOM
const feelingButtons = document.querySelectorAll(".feelings-grid .option-card");
const contentButtons = document.querySelectorAll(".contents-grid .option-card");
const generateBtn = document.getElementById("btn-gerar");
const counterText = document.querySelector("[data-counter]");

const recCard = document.getElementById("recommendation-card");
const recTag = document.getElementById("rec-tag");
const recFeelingTag = document.getElementById("rec-feeling-tag");
const recTitle = document.getElementById("rec-title");
const recDescription = document.getElementById("rec-description");
const recWhy = document.getElementById("rec-why");

// Estados Ativos
let selectedFeeling = "novo";
let selectedContent = "filme";
let interactionCount = 0;

// Listeners de Sentimentos
feelingButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    feelingButtons.forEach((item) => item.classList.remove("is-active"));
    btn.classList.add("is-active");
    selectedFeeling = btn.dataset.feeling;
  });
});

// Listeners de Tipos de Conteúdo
contentButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    contentButtons.forEach((item) => item.classList.remove("is-active"));
    btn.classList.add("is-active");
    selectedContent = btn.dataset.content;
  });
});

// Ação de Geração de Sugestão
if (generateBtn) {
  generateBtn.addEventListener("click", () => {
    // Incrementar contagem
    interactionCount += 1;
    if (counterText) {
      counterText.textContent = `Interações nesta visita: ${interactionCount}`;
    }

    // Resolver Categoria Secreta se for "Qualquer um"
    let contentKey = selectedContent;
    if (selectedContent === "qualquer") {
      const keys = ["filme", "serie", "jogo", "musica", "externa", "casa", "amigos"];
      const randomIdx = Math.floor(Math.random() * keys.length);
      contentKey = keys[randomIdx];
    }

    // Buscar recomendação
    const rec = recommendations[selectedFeeling][contentKey];

    if (rec && recCard) {
      // Remover animação de entrada para reiniciar o ciclo
      recCard.classList.remove("animate-recommendation");
      
      // Forçar reflow para que a animação possa rodar novamente
      void recCard.offsetWidth;

      // Atualizar Textos
      if (recTag) recTag.textContent = rec.tag;
      if (recFeelingTag) recFeelingTag.textContent = rec.feeling;
      if (recTitle) recTitle.textContent = rec.title;
      if (recDescription) recDescription.textContent = rec.desc;
      if (recWhy) recWhy.textContent = rec.why;

      // Atualizar Glow Dinâmico
      const feelings = ["novo", "rir", "chorar", "nostalgico", "problemas", "aconchegante", "inspirado", "animado"];
      feelings.forEach(f => recCard.classList.remove(`glow-${f}`));
      recCard.classList.add(`glow-${selectedFeeling}`);

      // Adicionar animação de entrada
      recCard.classList.add("animate-recommendation");
    }

    // Animação micro-interativa de pulso no próprio botão de geração
    generateBtn.animate(
      [
        { transform: "scale(1)" },
        { transform: "scale(0.97)" },
        { transform: "scale(1)" }
      ],
      { duration: 150, easing: "ease-out" }
    );
  });
}

// Inicialização do Glow Padrão ao carregar a página
if (recCard) {
  recCard.classList.add(`glow-${selectedFeeling}`);
}

// Efeito Parallax 3D Tilt no Card de Recomendação
if (recCard) {
  recCard.addEventListener("mousemove", (e) => {
    recCard.classList.add("is-tilting");
    const rect = recCard.getBoundingClientRect();
    const x = e.clientX - rect.left; // coordenada x dentro do card
    const y = e.clientY - rect.top;  // coordenada y dentro do card
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Inclinação máxima de 12 graus
    const rotateX = ((centerY - y) / centerY) * 12;
    const rotateY = ((x - centerX) / centerX) * 12;
    
    recCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  });
  
  recCard.addEventListener("mouseleave", () => {
    recCard.classList.remove("is-tilting");
    recCard.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
  });
}

// Botão Copiar Recomendação
const copyBtn = document.getElementById("btn-copiar");
if (copyBtn) {
  copyBtn.addEventListener("click", () => {
    const title = recTitle ? recTitle.textContent.trim() : "";
    const desc = recDescription ? recDescription.textContent.trim() : "";
    const why = recWhy ? recWhy.textContent.trim() : "";
    const type = recTag ? recTag.textContent.trim() : "";
    const feeling = recFeelingTag ? recFeelingTag.textContent.trim() : "";
    
    const textToCopy = `✨ Borocoxô — Recomendação de Entretenimento ✨\n\n` +
      `🎭 Humor: ${feeling}\n` +
      `🏷️ Tipo: ${type}\n` +
      `💎 Sugestão: ${title}\n` +
      `📝 Descrição: ${desc}\n` +
      `💡 Por que escolher: ${why}\n\n` +
      `Descubra a sua em: https://albertomateus9.github.io/minihacka-2026-p3-redes-04-borocoxo/`;
      
    navigator.clipboard.writeText(textToCopy).then(() => {
      copyBtn.classList.add("copied");
      const btnText = copyBtn.querySelector(".btn-copiar-text");
      const originalText = btnText ? btnText.textContent : "Copiar";
      if (btnText) btnText.textContent = "Copiado! ✓";
      
      setTimeout(() => {
        copyBtn.classList.remove("copied");
        if (btnText) btnText.textContent = originalText;
      }, 2000);
    }).catch(err => {
      console.error("Erro ao copiar para a área de transferência: ", err);
    });
  });
}
