const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const sucursales = {
    index:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        dbConcesionarias.forEach((concesionaria)=>{
            res.write("SUCURSAL: " + concesionaria.sucursal + "\n")
            res.write("DIRECCION: " + concesionaria.direccion + "\n")
            res.write("TELEFONO: " + concesionaria.telefono + "\n\n")
        })
        res.end()
    },
    sucursal:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        let sucursalElegida = req.params.sucursal;
        dbConcesionarias.forEach((concesionaria)=>{
            if(concesionaria.sucursal == sucursalElegida){
                res.write("SUCURSAL: " + concesionaria.sucursal + "\n")
                res.write("DIRECCION: " + concesionaria.direccion + "\n")
                res.write("TELEFONO: " + concesionaria.telefono + "\n")
                concesionaria.autos.forEach((auto)=>{
                    res.write("MARCA: " + auto.marca + "\n")
                    res.write("MODELO: " + auto.modelo + "\n")
                    res.write("AÑO: " + auto.anio + "\n\n")
                })
                res.end("CANTIDAD DE AUTOS A LA VENTA : " + concesionaria.autos.length)
            }
        })
        res.end("Sucursal incorrecta")
    },
}

module.exports = sucursales;