const fs = require("fs");
let dbConcesionarias = JSON.parse(fs.readFileSync("./data/concesionarias.json", "utf-8"));

const autos = {
    todosAutos:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
       dbConcesionarias.forEach((concesionaria)=>{
           concesionaria.autos.forEach((auto)=>{
            res.write("-" + auto.marca + "\n")
            res.write(auto.modelo + "\n")
            res.write(auto.anio + "\n\n")
           })
       })
       res.end()
    },
    datosAutos:(req,res)=>{
        res.set({'content-type':'text/plain;charset=utf-8'});
        let marcaIngresada = req.params.marca;
        dbConcesionarias.forEach((concesionaria)=>{
            concesionaria.autos.forEach((auto)=>{
                if(marcaIngresada == auto.marca){
                    res.write("-" + auto.marca + "\n")
                    res.write(auto.modelo + "\n")
                    res.write(auto.anio + "\n\n")
                }
            })
        })
    }
}



module.exports = autos;