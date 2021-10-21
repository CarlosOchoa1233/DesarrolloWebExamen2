function aplicarRelaciones(sequelize){
    console.log(sequelize.models)
    const Ciudad = sequelize.models.ciudad
    const Interes = sequelize.models.ptsInteres

    Interes.hasOne(Ciudad)
    Ciudad.belongsTo(Interes)
}

module.exports = {aplicarRelaciones}