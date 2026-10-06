/* ======================================================
EPIDEMIA DESCONHECIDA
INVESTIGAR, TRATAR E PREVENIR
====================================================== */

/* ======================================================
ESTADO DO JOGO
====================================================== */

let etapaAtual = 1;

let vidas = 3;

let pontos = 0;

let conhecimento = 0;

let caminho = "";

let jogoEncerrado = false;

/* ======================================================
ELEMENTOS HTML
====================================================== */

const telaInicial =
document.getElementById("telaInicial");

const telaJogo =
document.getElementById("telaJogo");

const botaoIniciar =
document.getElementById("botaoIniciar");

const numeroEtapa =
document.getElementById("numeroEtapa");

const titulo =
document.getElementById("titulo");

const texto =
document.getElementById("texto");

const opcoes =
document.getElementById("opcoes");

const feedback =
document.getElementById("feedback");

const proximo =
document.getElementById("proximo");

const vidasElemento =
document.getElementById("vidas");

const pontosElemento =
document.getElementById("pontos");

const conhecimentoElemento =
document.getElementById("conhecimento");

const barra =
document.getElementById("barraProgresso");

const icone =
document.getElementById("icone");

const caminhoAtual =
document.getElementById("caminhoAtual");

/* ======================================================
BANCO DE ETAPAS
====================================================== */

const etapas = {

/* ==================================================
   ETAPA 1
================================================== */

1: {

    titulo: "O início da epidemia",

    icone: "🦠",

    texto:
        "Uma doença desconhecida está se espalhando " +
        "pela cidade. Os hospitais começaram a receber " +
        "muitos pacientes. Você foi chamado para ajudar " +
        "a equipe de investigação.",

    opcoes: [

        {
            texto:
                "🔬 Investigar os primeiros pacientes",

            pontos: 10,

            conhecimento: 10,

            mensagem:
                "Boa decisão! A investigação começa reunindo " +
                "informações confiáveis sobre os primeiros casos.",

            correta: true
        },

        {
            texto:
                "📢 Ignorar os casos",

            pontos: -10,

            vidas: -1,

            mensagem:
                "A epidemia continua avançando enquanto ninguém " +
                "investiga sua origem.",

            correta: false
        },

        {
            texto:
                "💊 Distribuir medicamentos aleatórios",

            pontos: -10,

            vidas: -1,

            mensagem:
                "Não é seguro utilizar medicamentos sem saber " +
                "qual doença está sendo enfrentada.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 2
================================================== */

2: {

    titulo: "Os primeiros sintomas",

    icone: "🤒",

    texto:
        "Os pacientes apresentam febre, cansaço e " +
        "problemas respiratórios. A equipe precisa " +
        "organizar as informações antes de tomar decisões.",

    opcoes: [

        {
            texto:
                "📋 Registrar sintomas e histórico dos pacientes",

            pontos: 10,

            conhecimento: 10,

            mensagem:
                "Excelente. Registrar os sintomas ajuda a " +
                "identificar padrões entre os casos.",

            correta: true
        },

        {
            texto:
                "❌ Ignorar os sintomas",

            pontos: -10,

            vidas: -1,

            mensagem:
                "Sem informações sobre os sintomas, fica mais " +
                "difícil entender a doença.",

            correta: false
        },

        {
            texto:
                "🎲 Inventar um diagnóstico",

            pontos: -10,

            vidas: -1,

            mensagem:
                "Um diagnóstico precisa ser baseado em evidências.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 3
   ESCOLHA DO CAMINHO
================================================== */

3: {

    titulo: "Escolha sua linha de investigação",

    icone: "🔎",

    texto:
        "Agora a equipe descobriu que existem duas " +
        "linhas importantes de investigação. Você poderá " +
        "seguir pelo caminho do tratamento ou pelo caminho " +
        "da prevenção.",

    opcoes: [

        {
            texto:
                "🔬 Investigar o tratamento da doença",

            caminho:
                "tratamento",

            pontos: 15,

            conhecimento: 15,

            mensagem:
                "Você escolheu investigar o tratamento. " +
                "Agora será necessário descobrir como a doença " +
                "afeta os pacientes e quais medidas podem ajudar.",

            correta: true
        },

        {
            texto:
                "🛡️ Investigar a prevenção e transmissão",

            caminho:
                "prevencao",

            pontos: 15,

            conhecimento: 15,

            mensagem:
                "Você escolheu investigar a prevenção. " +
                "Agora será necessário descobrir como a doença " +
                "está se espalhando pela população.",

            correta: true
        },

        {
            texto:
                "🎲 Escolher uma causa aleatória",

            pontos: -15,

            vidas: -1,

            mensagem:
                "Uma investigação científica não pode ser baseada " +
                "em escolhas aleatórias.",

            correta: false
        }
    ]
},

/* ==================================================
   CAMINHO DO TRATAMENTO
   ETAPA 4
================================================== */

4: {

    titulo: "Investigando o tratamento",

    icone: "💊",

    caminhoPermitido: "tratamento",

    texto:
        "Os pesquisadores precisam descobrir quais " +
        "características da doença podem ajudar na busca " +
        "por um tratamento adequado.",

    opcoes: [

        {
            texto:
                "🧪 Analisar amostras em laboratório",

            pontos: 20,

            conhecimento: 20,

            mensagem:
                "As análises laboratoriais fornecem informações " +
                "importantes para compreender a doença.",

            correta: true
        },

        {
            texto:
                "💊 Testar medicamentos aleatoriamente",

            pontos: -20,

            vidas: -1,

            mensagem:
                "Tratamentos precisam ser avaliados com segurança " +
                "e baseados em evidências.",

            correta: false
        }
    ]
},

/* ==================================================
   CAMINHO DA PREVENÇÃO
   ETAPA 4
================================================== */

5: {

    titulo: "Investigando a transmissão",

    icone: "🛡️",

    caminhoPermitido: "prevencao",

    texto:
        "A equipe percebe que muitos pacientes tiveram " +
        "contato com outras pessoas doentes. É preciso " +
        "investigar como esses contatos aconteceram.",

    opcoes: [

        {
            texto:
                "🔗 Rastrear os contatos dos pacientes",

            pontos: 20,

            conhecimento: 20,

            mensagem:
                "Muito bem! O rastreamento ajuda a identificar " +
                "possíveis cadeias de transmissão.",

            correta: true
        },

        {
            texto:
                "🚫 Ignorar os contatos",

            pontos: -20,

            vidas: -1,

            mensagem:
                "Ignorar os contatos dificulta descobrir " +
                "como a doença está se espalhando.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 6
   TRATAMENTO
================================================== */

6: {

    titulo: "Testando uma hipótese de tratamento",

    icone: "🧪",

    caminhoPermitido: "tratamento",

    texto:
        "Os pesquisadores encontraram uma possível estratégia " +
        "de tratamento. Antes de utilizá-la, é necessário " +
        "avaliar as evidências.",

    opcoes: [

        {
            texto:
                "📊 Comparar resultados e evidências",

            pontos: 20,

            conhecimento: 20,

            mensagem:
                "Excelente. Comparar evidências ajuda a avaliar " +
                "se uma estratégia realmente funciona.",

            correta: true
        },

        {
            texto:
                "✅ Declarar o tratamento como definitivo",

            pontos: -15,

            vidas: -1,

            mensagem:
                "Uma hipótese precisa ser avaliada antes de " +
                "ser considerada uma conclusão.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 7
   PREVENÇÃO
================================================== */

7: {

    titulo: "Criando medidas de prevenção",

    icone: "😷",

    caminhoPermitido: "prevencao",

    texto:
        "Os dados mostram que a transmissão aumenta quando " +
        "as pessoas infectadas entram em contato com muitas " +
        "outras pessoas.",

    opcoes: [

        {
            texto:
                "🧼 Orientar medidas de higiene e prevenção",

            pontos: 20,

            conhecimento: 20,

            mensagem:
                "Boas medidas de prevenção podem ajudar a reduzir " +
                "a transmissão enquanto a investigação continua.",

            correta: true
        },

        {
            texto:
                "📢 Divulgar informações não verificadas",

            pontos: -20,

            vidas: -1,

            mensagem:
                "Informações não verificadas podem causar confusão " +
                "e dificultar o controle da epidemia.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 8
   PONTO DE ENCONTRO
================================================== */

8: {

    titulo: "As duas investigações se encontram",

    icone: "🧩",

    texto:
        "Os pesquisadores perceberam que tratar os pacientes " +
        "e prevenir novos casos são partes importantes da " +
        "mesma estratégia.",

    opcoes: [

        {
            texto:
                "🔬 Reunir os dados científicos e epidemiológicos",

            pontos: 20,

            conhecimento: 20,

            mensagem:
                "Excelente! Combinar diferentes tipos de evidência " +
                "permite tomar decisões mais completas.",

            correta: true
        },

        {
            texto:
                "🗑️ Ignorar parte das informações",

            pontos: -15,

            vidas: -1,

            mensagem:
                "Ignorar informações importantes pode prejudicar " +
                "o controle da epidemia.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 9
================================================== */

9: {

    titulo: "O plano de controle",

    icone: "🛡️",

    texto:
        "Agora a equipe possui informações suficientes " +
        "para montar um plano de controle da epidemia.",

    opcoes: [

        {
            texto:
                "🛡️ Combinar tratamento, prevenção e monitoramento",

            pontos: 25,

            conhecimento: 25,

            mensagem:
                "Excelente! O plano combina as duas linhas " +
                "de investigação e permite uma resposta mais completa.",

            correta: true
        },

        {
            texto:
                "💊 Apostar somente no tratamento",

            pontos: -15,

            vidas: -1,

            mensagem:
                "O tratamento é importante, mas sozinho não impede " +
                "novos casos.",

            correta: false
        },

        {
            texto:
                "🚫 Encerrar as medidas de prevenção",

            pontos: -20,

            vidas: -1,

            mensagem:
                "Suspender a prevenção cedo demais pode permitir " +
                "uma nova onda de transmissão.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 10
================================================== */

10: {

    titulo: "Aplicando o plano",

    icone: "🏥",

    texto:
        "O plano começa a ser aplicado. A equipe acompanha " +
        "os pacientes, monitora novos casos e verifica " +
        "se as medidas estão funcionando.",

    opcoes: [

        {
            texto:
                "📊 Monitorar os resultados continuamente",

            pontos: 20,

            conhecimento: 15,

            mensagem:
                "O monitoramento mostra que os novos casos " +
                "começam a diminuir.",

            correta: true
        },

        {
            texto:
                "😴 Parar de acompanhar os casos",

            pontos: -20,

            vidas: -1,

            mensagem:
                "Sem acompanhamento, uma nova onda de casos " +
                "poderia passar despercebida.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 11
================================================== */

11: {

    titulo: "A epidemia está diminuindo",

    icone: "📉",

    texto:
        "Os novos casos estão diminuindo. Porém, ainda é " +
        "necessário acompanhar a situação antes de declarar " +
        "que a epidemia está controlada.",

    opcoes: [

        {
            texto:
                "🔎 Continuar monitorando",

            pontos: 20,

            conhecimento: 10,

            mensagem:
                "A equipe continua acompanhando os dados e " +
                "confirma que a tendência de queda permanece.",

            correta: true
        },

        {
            texto:
                "🎉 Encerrar tudo imediatamente",

            pontos: -15,

            vidas: -1,

            mensagem:
                "Uma queda inicial não significa necessariamente " +
                "que a epidemia terminou.",

            correta: false
        }
    ]
},

/* ==================================================
   ETAPA 12
================================================== */

12: {

    titulo: "A epidemia foi controlada",

    icone: "🏆",

    texto:
        "Depois de investigar a doença, estudar o tratamento, " +
        "analisar a transmissão e aplicar medidas de prevenção, " +
        "a equipe conseguiu controlar a epidemia.",

    opcoes: [

        {
            texto:
                "🏆 Concluir investigação",

            pontos: 30,

            conhecimento: 20,

            mensagem:
                "Parabéns! Você conseguiu concluir a investigação.",

            correta: true
        }
    ]
}

};

/* ======================================================
INICIAR JOGO
====================================================== */

botaoIniciar.addEventListener(
"click",
iniciarJogo
);

function iniciarJogo() {

telaInicial.style.display =
    "none";

telaJogo.style.display =
    "block";

etapaAtual = 1;

vidas = 3;

pontos = 0;

conhecimento = 0;

caminho = "";

jogoEncerrado = false;

mostrarEtapa();

}

/* ======================================================
MOSTRAR ETAPA
====================================================== */

function mostrarEtapa() {

/*
   O caminho é escolhido na etapa 3.

   Como existem dois caminhos diferentes,
   usamos etapas específicas para cada caminho.

   Tratamento:
   3 → 4 → 6 → 8 → 9 → 10 → 11 → 12

   Prevenção:
   3 → 5 → 7 → 8 → 9 → 10 → 11 → 12
*/

let etapaReal =
    etapaAtual;

/*
   Se o jogador escolheu tratamento,
   determinadas etapas são puladas.
*/

if (
    caminho === "tratamento" &&
    etapaAtual === 5
) {

    etapaReal = 6;
}

if (
    caminho === "tratamento" &&
    etapaAtual === 7
) {

    etapaReal = 8;
}

/*
   Se escolheu prevenção,
   pulamos as etapas de tratamento.
*/

if (
    caminho === "prevencao" &&
    etapaAtual === 4
) {

    etapaReal = 5;
}

if (
    caminho === "prevencao" &&
    etapaAtual === 6
) {

    etapaReal = 7;
}

const etapa =
    etapas[etapaReal];

if (!etapa) {

    mostrarFinal();

    return;
}

numeroEtapa.textContent =
    `Etapa ${etapaAtual} de 12`;

titulo.textContent =
    etapa.titulo;

texto.textContent =
    etapa.texto;

icone.textContent =
    etapa.icone;

/* =========================
   CAMINHO NA TELA
========================= */

if (caminho === "tratamento") {

    caminhoAtual.textContent =
        "🔬 Caminho: Investigação e Tratamento";

    caminhoAtual.style.background =
        "#164e63";
}

else if (caminho === "prevencao") {

    caminhoAtual.textContent =
        "🛡️ Caminho: Prevenção e Epidemiologia";

    caminhoAtual.style.background =
        "#14532d";
}

else {

    caminhoAtual.textContent =
        "🔎 Caminho: Investigação";
}

/* =========================
   BARRA
========================= */

const porcentagem =
    (etapaAtual / 12) * 100;

barra.style.width =
    porcentagem + "%";

/* =========================
   LIMPA
========================= */

opcoes.innerHTML = "";

feedback.className =
    "feedback";

feedback.textContent =
    "";

proximo.style.display =
    "none";

/* =========================
   CRIA OPÇÕES
========================= */

etapa.opcoes.forEach(
    (opcao) => {

        const botao =
            document.createElement("button");

        botao.className =
            "opcao";

        botao.textContent =
            opcao.texto;

        botao.onclick =
            () => escolher(
                opcao,
                botao
            );

        opcoes.appendChild(
            botao
        );
    }
);

atualizarStatus();

}

/* ======================================================
ESCOLHER OPÇÃO
====================================================== */

function escolher(
opcao,
botao
) {

if (jogoEncerrado) {

    return;
}

/* CAMINHO */

if (opcao.caminho) {

    caminho =
        opcao.caminho;
}

/* DESABILITA BOTÕES */

const botoes =
    document.querySelectorAll(
        ".opcao"
    );

botoes.forEach(
    (b) => {

        b.disabled = true;

    }
);

/* PONTOS */

pontos +=
    opcao.pontos || 0;

/* CONHECIMENTO */

conhecimento +=
    opcao.conhecimento || 0;

/* VIDAS */

if (opcao.vidas) {

    vidas +=
        opcao.vidas;
}

if (vidas < 0) {

    vidas = 0;
}

/* VISUAL */

if (opcao.correta) {

    botao.classList.add(
        "certa"
    );

    feedback.className =
        "feedback positivo";

} else {

    botao.classList.add(
        "errada"
    );

    feedback.className =
        "feedback negativo";
}

feedback.textContent =
    opcao.mensagem;

atualizarStatus();

/* DERROTA */

if (vidas <= 0) {

    setTimeout(
        mostrarDerrota,
        700
    );

    return;
}

/* BOTÃO */

if (etapaAtual >= 12) {

    proximo.textContent =
        "🏆 Ver resultado";

} else {

    proximo.textContent =
        "Continuar →";
}

proximo.style.display =
    "block";

}

/* ======================================================
PRÓXIMA ETAPA
====================================================== */

function proximaEtapa() {

if (jogoEncerrado) {

    return;
}

if (etapaAtual >= 12) {

    mostrarFinal();

    return;
}

etapaAtual++;

/*
   Aqui fazemos o controle dos caminhos.

   Tratamento:
   pula 5 e 7

   Prevenção:
   pula 4 e 6
*/

if (
    caminho === "tratamento" &&
    etapaAtual === 5
) {

    etapaAtual = 6;
}

if (
    caminho === "tratamento" &&
    etapaAtual === 7
) {

    etapaAtual = 8;
}

if (
    caminho === "prevencao" &&
    etapaAtual === 4
) {

    etapaAtual = 5;
}

if (
    caminho === "prevencao" &&
    etapaAtual === 6
) {

    etapaAtual = 7;
}

mostrarEtapa();

}

/* ======================================================
STATUS
====================================================== */

function atualizarStatus() {

vidasElemento.textContent =
    vidas;

pontosElemento.textContent =
    pontos;

conhecimentoElemento.textContent =
    conhecimento;

}

/* ======================================================
FINAL
====================================================== */

function mostrarFinal() {

jogoEncerrado = true;

barra.style.width =
    "100%";

numeroEtapa.textContent =
    "Investigação concluída";

icone.textContent =
    "🏆";

titulo.textContent =
    "Epidemia controlada!";

const nomeCaminho =
    caminho === "tratamento"
        ? "🔬 Investigação e Tratamento"
        : "🛡️ Prevenção e Epidemiologia";

texto.innerHTML = `

    <div class="final">

        <div class="trofeu">
            🏆
        </div>

        <p>
            <strong>
                Parabéns, investigador!
            </strong>
        </p>

        <br>

        <p>
            Você conseguiu investigar a epidemia,
            analisar as informações e ajudar a equipe
            a controlar a transmissão.
        </p>

        <br>

        <p>
            <strong>
                Caminho escolhido:
            </strong>
        </p>

        <p>
            ${nomeCaminho}
        </p>

        <br>

        <p>
            ❤️ Vidas restantes:
            <strong>${vidas}</strong>
        </p>

        <p>
            ⭐ Pontuação:
            <strong>${pontos}</strong>
        </p>

        <p>
            🔬 Conhecimento:
            <strong>${conhecimento}</strong>
        </p>

        <br>

        <p>
            O controle de uma epidemia depende da combinação
            entre investigação, tratamento, prevenção e
            acompanhamento dos casos.
        </p>

    </div>

`;

opcoes.innerHTML = "";

feedback.className =
    "feedback";

proximo.style.display =
    "block";

proximo.textContent =
    "🔄 Jogar novamente";

proximo.onclick =
    reiniciar;

}

/* ======================================================
DERROTA
====================================================== */

function mostrarDerrota() {

jogoEncerrado = true;

barra.style.width =
    "100%";

numeroEtapa.textContent =
    "Investigação encerrada";

icone.textContent =
    "💀";

titulo.textContent =
    "A epidemia venceu";

texto.innerHTML = `

    <div class="derrota">

        <div class="icone-final">
            🦠
        </div>

        <p>
            <strong>
                Você ficou sem vidas.
            </strong>
        </p>

        <br>

        <p>
            As decisões tomadas durante a investigação
            não foram suficientes para controlar a epidemia.
        </p>

        <br>

        <p>
            A equipe precisará recomeçar a investigação
            e buscar novas evidências.
        </p>

        <br>

        <p>
            ⭐ Pontuação:
            <strong>${pontos}</strong>
        </p>

        <p>
            🔬 Conhecimento:
            <strong>${conhecimento}</strong>
        </p>

    </div>

`;

opcoes.innerHTML = "";

feedback.className =
    "feedback";

proximo.style.display =
    "block";

proximo.textContent =
    "🔄 Tentar novamente";

proximo.onclick =
    reiniciar;

}

/* ======================================================
REINICIAR
====================================================== */

function reiniciar() {

etapaAtual = 1;

vidas = 3;

pontos = 0;

conhecimento = 0;

caminho = "";

jogoEncerrado = false;

proximo.onclick =
    proximaEtapa;

telaJogo.style.display =
    "none";

telaInicial.style.display =
    "flex";

atualizarStatus();

}

/* ======================================================
INICIALIZAÇÃO
====================================================== */

atualizarStatus();