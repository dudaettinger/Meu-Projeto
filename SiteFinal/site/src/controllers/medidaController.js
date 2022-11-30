var medidaModel = require("../models/medidaModel");

function buscarVotosFeminino(req, res) {

    console.log(`Recuperando medidas em tempo real`);

        medidaModel.buscarVotosFeminino().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}

function buscarVotosMasculino(req, res) {


    console.log(`Recuperando medidas em tempo real`);

        medidaModel.buscarVotosMasculino().then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(function (erro) {
            console.log(erro);
            console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
            res.status(500).json(erro.sqlMessage);
        });

}


module.exports = {
    // buscarUltimasMedidas,
    // buscarMedidasEmTempoReal,
    buscarVotosFeminino,
    buscarVotosMasculino,
}