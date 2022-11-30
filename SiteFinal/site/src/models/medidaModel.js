var database = require("../database/config");

function buscarVotosFeminino() {
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select l.descricao, count(*) as quantidade from votos v
        join looks l on v.fkLooks = l.idLooks
        where l.genero = 'F'
        group by l.idLook;`
        ;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select count(*) as quantidade, l.nome as descricao
        from looks l
        join voto v ON l.idLook = v.fkLook
        where l.genero = 'F'
        group by l.descricao;`
        ;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}


function buscarVotosMasculino() {
    
    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = ` select l.descricao, count(*) as quantidade from votos v
        join looks l on v.fkLooks = l.idLooks
        where l.genero = 'M'
        group by l.idLook;`
        ;

    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = ` select count(*) as quantidade, l.nome as descricao
        from looks l
        join voto v ON l.idLook = v.fkLook
        where l.genero = 'M'
        group by l.descricao;`
        ;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);

}



module.exports = {
     buscarVotosFeminino,
     buscarVotosMasculino,
}
