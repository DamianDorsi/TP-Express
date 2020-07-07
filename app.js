const express = require("express");
const app = express();

//RUTAS
const routeAutos = require("./routes/autos");
const routeHome = require("./routes/home");
const routeMarcas = require("./routes/marcas");
const routeSucursales = require("./routes/sucursales");

//SERVIDOR
app.listen(3030,()=>console.log("El servidor esta funcionando en el puerto 3030"));

//MODULOS DE RUTAS
app.use("/", routeHome);
app.use("/sucursales", routeSucursales);
app.use("/marcas", routeMarcas);
app.use("/autos", routeAutos);