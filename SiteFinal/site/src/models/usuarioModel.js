var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM usuario WHERE email = '${email}' AND senha = sha2('${senha}', 256);
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function verificarTentativasQuiz(idUsuario){
    var instrucao = `
    select count(idQuiz) as qtd_tentativas 
    from quiz q
    join usuario u on u.idUsuario = q.fkusuario
    where u.idUsuario = ${idUsuario}
    group by u.idUsuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
} 
// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, estilodedanca, idade, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO usuario (nome, estilodedanca, idade, email, senha) VALUES ('${nome}', '${estilodedanca}', '${idade}', '${email}', sha2('${senha}', 256));
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

//VOTAÇÃO

function cadastrarVoto(fkLook, fkUsuario) {
    return database.executar(`INSERT INTO voto VALUES(NULL, ${fkUsuario}, ${fkLook}, now())`)
}

function cadastrarTentativa(idUsuario, pontos) {

    var instrucao = `
        INSERT INTO quiz (pontos, fkUsuario) VALUES (${pontos}, ${idUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}




module.exports = {
    entrar,
    cadastrar,
    listar,
    cadastrarVoto,
    verificarTentativasQuiz,
    cadastrarTentativa
};