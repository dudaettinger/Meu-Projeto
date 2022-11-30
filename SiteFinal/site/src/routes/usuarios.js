var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarTentativa", function (req, res) {
    usuarioController.cadastrarTentativa(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.post("/autenticarTentativa", function (req, res) {
    usuarioController.verificarTentativasQuiz(req, res);
});

router.post("/cadastrar-voto", function (req, res) {
    usuarioController.cadastrarVoto(req, res);
});





//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js

module.exports = router;