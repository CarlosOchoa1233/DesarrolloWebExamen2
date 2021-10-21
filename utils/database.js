const Sequelize = require('sequelize')
const {aplicarRelaciones} = require('./relations')
const sequelize = new Sequelize('ChaJosBD','user1','root',{
    dialect: 'mysql',
    host:'54.198.161.35',
    define:{
        timestamps: false,
        freezeTableName: true
    }
})

const modelDefiners = [
    require('../models/ciudades'),
    require('../models/ptsInteres'),
]

for(const modelDefiner of modelDefiners){
    modelDefiner(sequelize)
}

aplicarRelaciones(sequelize)

module.exports = sequelize