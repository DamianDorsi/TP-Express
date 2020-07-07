const express = require('express');
const router = express.Router();

let marcasController = require("../controller/marcasController");

router.get("/", marcasController.nuestrasMarcas);
router.get("/:marca", marcasController.marcasDetalle)

module.exports = router;