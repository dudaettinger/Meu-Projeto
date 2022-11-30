b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

/* Street Dance Quiz  */

let titulo = document.querySelector('h1')
let instrucoes = document.querySelector('#instrucoes')
let aviso = document.querySelector('#aviso')
//let respostaEsta = document.querySelector('#respostaEsta')
let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao')
let pergunta   = document.querySelector('#pergunta')

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')
let d = document.querySelector('#d')

// article com a class questoes
let articleQuestoes = document.querySelector('.questoes')
// ol li com as alternativas
let alternativas = document.querySelector('#alternativas')

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    alternativaD : "Aleternativa D",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : "Onde nasceu o Hip Hop?",
    alternativaA : "Nova Iorque",
    alternativaB : "Los Angeles",
    alternativaC : "Washington",
    alternativaD : "Miami",
    correta      : "Nova Iorque",
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O hip-hop emergiu em meados da década de",
    alternativaA : "1960",
    alternativaB : "1970",
    alternativaC : "1980",
    alternativaD : "1990",
    correta      : "1970",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "A diversidade é muito presente no Hip Hop, Esta cultura valoriza:",
    alternativaA : "A cultura negra dos excluídos",
    alternativaB : "a aceitação entre os iguais",
    alternativaC : "a cultura estrangeira como a única e verdadeira",
    alternativaD : "a aceitação mútua entre as diferentes tribos e ritmos",
    correta      : "a aceitação mútua entre as diferentes tribos e ritmos",
}

const q4 = {
    numQuestao   : 4,
    pergunta     : "Dentre os objetivos do Hip Hop como movimento social, temos:",
    alternativaA : "Reivindicar emprego, saúde e segurança",
    alternativaB : "Mostrar os passos diferentes da dança e a união das tribos",
    alternativaC : "Organizar competições entre as tribos e as comunidades",
    alternativaD : "Dar voz a esta cultura jovem e enfrentar os problemas da sociedade",
    correta      : "Dar voz a esta cultura jovem e enfrentar os problemas da sociedade",
}

const q5 = {
    numQuestao   : 5,
    pergunta     : "Os pilares fundamentais da cultura Hip Hop são:",
    alternativaA : "a leitura e a escrita",
    alternativaB : "a motivação para dançar e a alegria",
    alternativaC : "o break dance e o DJ",
    alternativaD : "o espaço e a comunidade",
    correta      : "o break dance e o DJ",
}

const q6 = {
    numQuestao   : 6,
    pergunta     : "Qual dos estilos musicais abaixo mais se aproxima do Hip Hop?",
    alternativaA : "Funk",
    alternativaB : "Rythm and blues",
    alternativaC : "Forró",
    alternativaD : "Rock",
    correta      : "Rythm and blues",
}
const q7 = {
    numQuestao   : 7,
    pergunta     : "Sobre o Hip Hop, assinale a alternativa FALSA:",
    alternativaA : "O Hip Hop é um gênero poético",
    alternativaB : "O MC é o anfitrião de um evento público ou privado",
    alternativaC : "O Grafite é uma expressão livre da arte",
    alternativaD : "O Hip Hop envolve o grafite, com desenhos e mensagens",
    correta      : "O Hip Hop é um gênero poético",
}

const q8 = {
    numQuestao   : 8,
    pergunta     : "Quem são os b-boys e as b-girls?",
    alternativaA : "Os backing vocals nos shows de rap",
    alternativaB : "Os cantores e cantoras de break dance",
    alternativaC : "Talentosos dançarinos de hip-hop",
    alternativaD : "Apresentadores de shows de rap",
    correta      : "Talentosos dançarinos de hip-hop",
}

const q9 = {
    numQuestao   : 9,
    pergunta     : "Com que propósito nasceu o movimento Hip Hop?",
    alternativaA : "Para ser uma disputa de passos mais difíceis",
    alternativaB : "Para promover e festejar este estilo de vida e de dançar",
    alternativaC : "Para desenvolver a arte do Grafite nas ruas da cidade",
    alternativaD : "Para criticar as injustiças e opressões sofridas pelos pobres",
    correta      : "Para criticar as injustiças e opressões sofridas pelos pobres",
}

const q10 = {
    numQuestao   : 10,
    pergunta     : "Baseado em seus conhecimentos sobre o Hip Hop, indique a alternativa FALSA:",
    alternativaA : "Promove a leitura e a escrita por meio da expressão corporal e das artes",
    alternativaB : "O hip hop é uma cultura vinculada à contestação e à manifestação de inconformismo",
    alternativaC : "No brasil, O Hip Hop cresce e se incorpora cada vez mais nas culturas juvenis e urbanas",
    alternativaD : "O Hip Hop foi uma alternativa para enfrentar a violência, a pobreza, o tráfico de drogas e o racismo",
    correta      : "Promove a leitura e a escrita por meio da expressão corporal e das artes",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9, q10]

let numero = document.querySelector('#numero')
let total  = document.querySelector('#total')

numero.textContent = q1.numQuestao

let totalDeQuestoes = (questoes.length)-1
console.log("Total de questões " + totalDeQuestoes)
total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, para iniciar o Quiz
numQuestao.textContent = q1.numQuestao
pergunta.textContent   = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
d.textContent = q1.alternativaD

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')
d.setAttribute('value', '1D')

// PARA MONTAR AS PROXIMAS QUESTOES
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao
    numQuestao.textContent = questoes[nQuestao].numQuestao
    pergunta.textContent   = questoes[nQuestao].pergunta
    a.textContent = questoes[nQuestao].alternativaA
    b.textContent = questoes[nQuestao].alternativaB
    c.textContent = questoes[nQuestao].alternativaC
    d.textContent = questoes[nQuestao].alternativaD
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
    d.setAttribute('value', nQuestao+'D')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
    d.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
    d.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value
    console.log("Questão " + numeroDaQuestao)

    let respostaEscolhida = resposta.textContent
    //console.log("RespU " + respostaEscolhida)

    let certa = questoes[numeroDaQuestao].correta
    //console.log("RespC " + certa)

    if(respostaEscolhida == certa) {
        //console.log("Acertou")
        //respostaEsta.textContent = "Correta 😊"
        pontos += 10 // pontos = pontos + 10
    } else {
        //console.log("Errou!")
        //respostaEsta.textContent = "Errada 😢"
    }

    // atualizar placar
    placar = pontos
    instrucoes.textContent = "Pontos " + placar

    // bloquear a escolha de opcoes
    bloquearAlternativas()

    setTimeout(function() {
        //respostaEsta.textContent = '...'
        proxima = numeroDaQuestao+1

        if(proxima > totalDeQuestoes) {
            console.log('Fim do Jogo!')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }
    }, 250)
    desbloquearAlternativas()
}

function fimDoJogo() {
    instrucoes.textContent = "Fim de Jogo!"
    numQuestao.textContent = ""
    sessionStorage.PONTOS_USUARIO = pontos
    cadastrarTentativa()
    verificarTentativasQuiz();
    let pont = ''
    pontos == 0 ? pont = 'ponto' : pont = 'pontos'

    pergunta.textContent   = "Você conseguiu " + pontos + " " + pont

    aviso.textContent = "Você conseguiu " + pontos + " " + pont

    a.textContent = ""
    b.textContent = ""
    c.textContent = ""

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')
    d.setAttribute('value', '0')


    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(function() {
        
        pontos = 0 // zerar placar
        window.location = "./usuario.html";
    }, 2000)
}


function cadastrarTentativa() {

    var idUsuarioVar = sessionStorage.ID_USUARIO;
    var pontosVar = sessionStorage.PONTOS_USUARIO;

    fetch("/usuarios/cadastrarTentativa", {

        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({

            idUsuarioServer: idUsuarioVar,
            pontosServer: pontosVar,
        })

    }).then(function (resposta) {

        console.log("resposta: ", resposta);

    }).catch(function (resposta) {
        console.log(`#ERRO: ${resposta}`);
    });

    return false;
}

function verificar() {
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    fetch("/usuarios/autenticarTentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

              sessionStorage.TENTATIVAS_USUARIO = json.qtd_tentativas;

            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}

function verificarTentativasQuiz() {
    var idUsuarioVar = sessionStorage.ID_USUARIO;
    fetch("/usuarios/autenticarTentativa", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            idUsuarioServer: idUsuarioVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));

              sessionStorage.TENTATIVAS_USUARIO = json.qtd_tentativas;
              if (Number(sessionStorage.TENTATIVAS_USUARIO) > 0) {
                alert('Você ja tentou realizar esse quiz !! O quiz permite somente uma tentativa.')
                window.location = "./usuario.html";
              } 


            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");

            resposta.text().then(texto => {
                console.error(texto);

            });
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
}
