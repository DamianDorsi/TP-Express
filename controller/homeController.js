const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json","utf-8"))
let home = {
    tituloBienvenida :(req,res)=>{
        res.write("Bienvenidos a Automotores DigitalHouse" + "\n\n")
        res.write("Nuestas concesionarias son: " + "\n\n")
        dbConcesionarias.forEach((concesionaria)=>{
           res.write(concesionaria.sucursal + "\n")
        })
        res.end()
    },
};
module.exports = home;