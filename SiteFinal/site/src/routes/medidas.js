var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarVotosFeminino", function (req, res) {
    medidaController.buscarVotosFeminino(req, res);
});

router.get("/buscarVotosMasculino", function (req, res) {
    medidaController.buscarVotosMasculino(req, res);
})


module.exports = router;

