const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");


        const perguntas = [
    {
        enunciado: " Qual a principal festa do México?",
        alternativas: [
            {
                texto: "Dia da Nossa Senhora de Guadalupe!",
                afirmacao: "A festa incluiu ritus religiosos, comidas e bebidas com conotações,especialmente na Basílica de Guadalupe, na Cidade do México. "
            },
            {
                texto: "Dia da Assunção da Virgem Maria!",
                afirmacao: "Em algumas regiões, a celebrações podem durar até duas semanas. "
            }
        ]
    },
    {
        enunciado: " Qual das principais pirâmides do Méxcio você conhece mais? ",
        alternativas: [
            {
                texto: "Pirâmide do Sol",
                afirmacao: "- É uma das pirâmides mais antigas e importantes de Teotihuacán, localizada a cerca de 40 km da Cidade do México.Com 65 metros de altura, é a terceira maior pirâmide do mundo e oferece uma vista incrível da cidade antiga."
            },
            {
                texto: "Pirâmide da Lua",
                afirmacao: "- Localizada no final da Avenida dos Mortos, a Pirâmide da Lua é uma estrutura impressionante que forma um complexo com a Pirâmide do Sol e outras estruturas.Com 45 metros de altura, é um exemplo da arquitetura e engenharia avançada dos povos pré-colombianos"
            }
        ]
    },
    {
        enunciado: "Após a elaboração do trabalho escrito, a professora realizou um debate entre a turma para entender como foi realizada a pesquisa e escrita. Nessa conversa também foi levantado um ponto muito importante: como a IA impacta o trabalho do futuro. Nesse debate, como você se posiciona?",
        alternativas: [
            {
                texto: "Defende a ideia de que a IA pode criar novas oportunidades de emprego e melhorar habilidades humanas.",
                afirmacao: "Vem impulsionando a inovação na área de IA e luta para abrir novos caminhos profissionais com IA."
            },
            {
                texto: "Me preocupo com as pessoas que perderão seus empregos para máquinas e defendem a importância de proteger os trabalhadores.",
                afirmacao: "Sua preocupação com as pessoas motivou a criar um grupo de estudos entre trabalhadores para discutir meios de utilização de IA de forma ética."
            }
        ]
    },
    {
        enunciado: " Qual festa em sua visão é a principal festa do México?",
        alternativas: [
            {
                texto: "Dia dos Mortos (Día de los Muertos)",
                afirmacao: "É uma celebração única e icônica do México, realizada em 1º e 2 de novembro, para homenagear os entes queridos falecidos.As famílias criam altares elaborados com fotos, flores, velas e alimentos favoritos dos mortos."
            },
            {
                texto: "Carnaval de Veracruz:",
                afirmacao: "É uma festa animada e cheia de energia, realizada em fevereiro, com desfiles, música e dança.A cidade de Veracruz se transforma em um epicentro de festividades, com influências africanas, indígenas e espanholas."
            }
        ]
    },
    {
        enunciado: "Você tem um trabalho em grupo de biologia para entregar na semana seguinte, o andamento do trabalho está um pouco atrasado e uma pessoa do seu grupo decidiu fazer com ajuda da IA. O problema é que o trabalho está totalmente igual ao do chat. O que você faz? ",
        alternativas: [
            {
                texto: "Escrever comandos para o chat é uma forma de contribuir com o trabalho, por isso não é um problema utilizar o texto inteiro.",
                afirmacao: "Infelizmente passou a utilizar a IA para fazer todas suas tarefas e agora se sente dependente da IA para tudo."
            },
            {
                texto: "O chat pode ser uma tecnologia muito avançada, mas é preciso manter a atenção pois toda máquina erra, por isso revisar o trabalho e contribuir com as perspectivas pessoais é essencial.",
                afirmacao: "Percebeu que toda IA reproduz orientações baseadas na empresa que programou e muito do que o chat escrevia não refletia o que pensava e por isso sabe que os textos gerados pela IA devem servir como auxílio e não resultado final. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
