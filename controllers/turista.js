const path = require('path')
const Ciudad = require('../utils/database').models.ciudad
const Interes = require('../utils/database').models.ptsInteres

exports.postAgregarCiudad = (req,res)=>{
    console.log(req.body)
    Ciudad.create(req.body)
        .then(ca=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postAgregarInteres = (req,res)=>{
    console.log(req.body)
    Interes.create(req.body)
        .then(ca=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}