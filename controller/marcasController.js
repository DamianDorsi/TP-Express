const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const marcas = {
    nuestrasMarcas:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'})
        res.write("MARCAS DE AUTOS DISPONIBLES:" + "\n\n")
        let marca = []
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                marca.push(auto.marca)
            })
        })
        marca = [...new Set(marca)]
        marca.forEach((marc)=>{
            res.write(marc + "\n\n")
        })
        res.end()
    },
    marcasDetalle:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        let marcaIngresada = req.params.marca;
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                if(marcaIngresada == auto.marca){
                    res.write("-" + auto.marca + "\n")
                    res.write(auto.modelo + "\n")
                    res.write(auto.anio + "\n\n")
                }
            })//POR ACA TENGO QUE PONER UN RES.END PERO NO SE DONDE
        })
        res.end("NO TRABAJAMOS CON ESA MARCA")
    },
}
module.exports = marcas;