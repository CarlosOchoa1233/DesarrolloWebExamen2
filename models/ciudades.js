const Sequelize = require('sequelize');
const Ciudad = (sequelize)=>{
    sequelize.define('ciudad', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        pais: Sequelize.STRING,
        no_interes: Sequelize.INTEGER
    })
}
module.exports = Ciudad