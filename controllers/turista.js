const path = require('path')
const Ciudad = require('../utils/database').models.ciudad
const Interes = require('../utils/database').models.ptsInteres

exports.postAgregarCiudad = (req,res)=>{
    console.log(req.body)
    Ciudad.create(req.body)
        .then(ciu=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postActualizarContadorCiudad = (req,res)=>{
    console.log(req.body)
    Ciudad.update({
        no_interes: Ciudad.no_interes+1
    },{
        where:{
            nombre: req.body.nombre
        }
    }).then(() =>{
        console.log("Numero de interes actualizado")
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
        .then(inter=>{
            console.log("Registro Existoso")
            res.json({estado: "aceptado"})
        })
        .catch(err=>{
            console.log(err)
            res.json({estado: "error"})
        })
}

exports.postActualizarContadorInteres = (req,res)=>{
    console.log(req.body)
    Interes.update({
        no_interes: Interes.no_interes
    },{
        where:{
            nombre: req.body.nombre
        }
    }).then(() =>{
        console.log("Numero de interes actualizado")
        res.json({estado: "aceptado"})
    })
    .catch(err=>{
        console.log(err)
        res.json({estado: "error"})
    })
}

exports.postBuscarCiudadPorPais = (req,res)=>{
    Ciudad.findAll({
        where:{
            pais: req.body.pais
        }
    })
    .then(city =>{
        console.log(city)
        res.json(city)
    })
    .catch(err=>console.log(err))
}

exports.postBuscarInteresPorCiudad = (req,res)=>{
    Interes.findAll({
        where:{
            ciudadNombre: req.body.ciudadNombre
        }
    })
    .then(city =>{
        console.log(city)
        res.json(city)
    })
    .catch(err=>console.log(err))
}
