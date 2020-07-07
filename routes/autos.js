const express = require('express');
const router = express.Router();

let autosController = require("../controller/autosController");

router.get("/", autosController.todosAutos)
router.get("/:marca", autosController.datosAutos)



module.exports = router;