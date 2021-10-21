const Sequelize = require('sequelize');
const Ciudad = (sequelize)=>{
    sequelize.define('ciudad', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        pais: Sequelize.STRING,
        no_interes: Sequelize.INTEGER
    })
}
module.exports = Ciudad