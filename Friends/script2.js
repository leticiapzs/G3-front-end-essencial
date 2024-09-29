function conhecerPersonagem(botao) {
    const resposta = document.getElementById("resposta-botao");
    const audio = document.getElementById("audio-botao");
    let info;
    let audioSrc;

    switch (botao) {
        case 1:
            info = "Monica Geller, interpretada por Courteney Cox, é a irmã mais nova de Ross e uma chef de cozinha apaixonada. Conhecida por sua obsessão por limpeza e organização, Mônica frequentemente gera situações cômicas. Ao longo da série, ela desenvolve um romance com Chandler Bing, com quem se casa e adota filhos. Sua personalidade leal e humor sarcástico a tornam uma figura central no grupo de amigos, revelando também seu lado emocional.";
            audioSrc = "./audio/MonicaWelcomeToTheRealWorld.mp3";
            break;
        case 2:
            info = "Chandler Bing, interpretado por Matthew Perry, é conhecido por seu humor sarcástico e sua habilidade de fazer piadas em situações constrangedoras. Ele trabalha em uma profissão de escritório que é inicialmente um mistério para seus amigos, mas mais tarde se torna um especialista em marketing. Chandler tem um relacionamento romântico com Mônica Geller, com quem eventualmente se casa e adota filhos. Sua jornada ao longo da série explora temas de compromisso, amizade e crescimento pessoal, revelando seu lado sensível e vulnerável sob a fachada de comediante.";
            audioSrc = "./audio/ChandlerCouldIBeMoreSorry.mp3";
            break;
        case 3:
            info = "Ross Geller, interpretado por David Schwimmer, é um paleontólogo e o irmão mais velho de Mônica Geller. Conhecido por sua personalidade nerd e suas várias desventuras românticas, Ross é obcecado por dinossauros e tem um histórico complicado com Rachel Green, com quem se envolve em um relacionamento tumultuado ao longo da série. Ele é marcado por seu famoso 'We were on a break!' e suas tentativas cômicas de lidar com a paternidade, especialmente com seu filho Ben e, mais tarde, com suas gêmeas. Ross é leal e emocional, e seu crescimento pessoal é uma parte central da narrativa da série.";
            audioSrc = "./audio/RossWeReallyWereOnABreak.mp3";
            break;
        case 4:
            info = "Rachel Green, interpretada por Jennifer Aniston, começa a série como uma jovem recém-saída de um relacionamento e buscando sua independência. Inicialmente, ela trabalha como garçonete antes de encontrar sucesso na indústria da moda. Rachel é conhecida por seu estilo icônico e por sua evolução pessoal ao longo da série, passando de uma 'princesa' dependente para uma mulher forte e independente. Seu relacionamento com Ross Geller é uma das principais tramas da série, envolvendo altos e baixos emocionais. Rachel é leal, divertida e traz um toque de glamour ao grupo de amigos, equilibrando sua ambição profissional com sua vida pessoal.";
            audioSrc = "./audio/RachelYoureAShoe.mp3";
            break;
        case 5:
            info = "Joey Tribbiani, interpretado por Matt LeBlanc, é um ator em ascensão conhecido por seu charme, humor e um jeito despreocupado. Ele é famoso por seu bordão 'How you doin'?' e por sua natureza ingênua e amável. Joey tem uma forte paixão pela atuação, embora frequentemente enfrente dificuldades para conseguir papéis significativos. Ele é um grande amigo do grupo, especialmente de Chandler Bing, com quem divide um apartamento. Apesar de suas constantes tentativas de conquistar mulheres, Joey é leal e protetor com seus amigos, trazendo leveza e diversão às dinâmicas do grupo. Sua personalidade descontraída e seu amor pela comida também são características marcantes.";
            audioSrc = "./audio/JoeyHeyHowYouDoin.mp3";
            break;
        case 6:
            info = "Phoebe Buffay, interpretada por Lisa Kudrow, é uma personagem excêntrica e única, conhecida por seu senso de humor peculiar e suas músicas originais, como 'Smelly Cat'. Ela teve uma infância difícil, mas desenvolveu uma personalidade otimista e independente. Phoebe trabalha como massagista e, ao longo da série, se torna uma figura central do grupo, sempre trazendo uma perspectiva diferente e divertida. Seu estilo de vida alternativo e suas crenças espirituais a destacam, e ela é leal e protetora com seus amigos. O relacionamento dela com Mike Hannigan, que se desenvolve na série, também é um foco importante, mostrando seu lado romântico e vulnerável.";
            audioSrc = "./audio/PhoebeSmellyCat.mp3";
            break;
        default:
            info = "";
            audioSrc = "";

    }

    resposta.textContent = info;
    audio.src = audioSrc;
    audio.play();
}

const perguntas = [
    {
        pergunta: "O que você gosta de fazer no tempo livre?",
        respostas: {
            Joey: "Comer e assistir TV",
            Ross: "Visitar museus",
            Rachel: "Ir às compras",
            Chandler: "Fazer piadas",
            Monica: "Cozinhar",
            Phoebe: "Tocar violão"
        }
    },
    {
        pergunta: "Qual é o seu maior defeito?",
        respostas: {
            Joey: "Sou meio ingênuo",
            Ross: "Sou muito competitivo",
            Rachel: "Sou indecisa",
            Chandler: "Uso humor como defesa",
            Monica: "Sou obcecada por organização",
            Phoebe: "Sou um pouco excêntrica"
        }
    },
    {
        pergunta: "Qual seria seu emprego dos sonhos?",
        respostas: {
            Joey: "Ator",
            Ross: "Paleontólogo",
            Rachel: "Trabalhar com moda",
            Chandler: "Escritor de comédia",
            Monica: "Chef de cozinha",
            Phoebe: "Música"
        }
    },
    {
        pergunta: "Qual é sua comida favorita?",
        respostas: {
            Joey: "Pizza",
            Ross: "Sanduíche de peru",
            Rachel: "Salada",
            Chandler: "Cereal",
            Monica: "Tudo, contanto que eu faça",
            Phoebe: "Comida vegetariana"
        }
    },
    {
        pergunta: "Como você lida com problemas?",
        respostas: {
            Joey: "Ignoro e continuo minha vida",
            Ross: "Reflito sobre o que aconteceu",
            Rachel: "Peço conselhos a amigos",
            Chandler: "Uso humor para amenizar",
            Monica: "Encontro uma solução prática",
            Phoebe: "Aceito o fluxo da vida"
        }
    },
    {
        pergunta: "Qual desses animais você escolheria como mascote?",
        respostas: {
            Joey: "Pato",
            Ross: "Macaco",
            Rachel: "Gato",
            Chandler: "Galinha",
            Monica: "Cachorro",
            Phoebe: "Pássaro"
        }
    },
    {
        pergunta: "Como você descreveria seu estilo pessoal?",
        respostas: {
            Joey: "Confortável e casual",
            Ross: "Intelectual e prático",
            Rachel: "Estiloso e moderno",
            Chandler: "Simples e despojado",
            Monica: "Clássico e elegante",
            Phoebe: "Boêmio e descontraído"
        }
    }
];

let perguntaAtual = 0;
let pontuacao = {
    Joey: 0,
    Ross: 0,
    Rachel: 0,
    Chandler: 0,
    Monica: 0,
    Phoebe: 0
};

// Iniciar ou reiniciar o quiz ao clicar no botão
document.getElementById('botao-iniciar').addEventListener('click', function() {
    iniciarQuiz();
});

function iniciarQuiz() {
    // Reiniciar as variáveis do quiz
    perguntaAtual = 0;
    pontuacao = {
        Joey: 0,
        Ross: 0,
        Rachel: 0,
        Chandler: 0,
        Monica: 0,
        Phoebe: 0
    };
    
    // Mostrar a área do quiz e esconder a seção inicial
    document.querySelector('.quiz-area').classList.remove('hidden');
    document.getElementById('resultado').classList.add('hidden');

    mostrarPergunta(); // Começar o quiz
}

function mostrarPergunta() {
    const perguntaEl = document.getElementById('pergunta');
    const respostasEl = document.getElementById('respostas');
    
    const pergunta = perguntas[perguntaAtual];
    perguntaEl.innerText = pergunta.pergunta;
    respostasEl.innerHTML = '';

    for (let personagem in pergunta.respostas) {
        const botaoResposta = document.createElement('button');
        botaoResposta.innerText = pergunta.respostas[personagem];
        botaoResposta.classList.add('botao-quiz');
        botaoResposta.onclick = () => selecionarResposta(personagem);
        respostasEl.appendChild(botaoResposta);
    }
}

function selecionarResposta(personagem) {
    pontuacao[personagem]++;
    if (perguntaAtual < perguntas.length - 1) {
        perguntaAtual++;
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
}

function mostrarResultado() {
    const resultadoEl = document.getElementById('resultado');
    const quizArea = document.getElementById('area-quiz');
    quizArea.classList.add('hidden'); // Esconder a área do quiz

    const personagemComMaiorPontuacao = Object.keys(pontuacao).reduce((a, b) => pontuacao[a] > pontuacao[b] ? a : b);
    resultadoEl.innerHTML = `<h2>Você é o(a) ${personagemComMaiorPontuacao}!</h2>`;
    resultadoEl.classList.remove('hidden'); // Mostrar o resultado
}
