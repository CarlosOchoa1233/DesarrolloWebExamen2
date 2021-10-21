const Sequelize = require('sequelize');
const Interes = (sequelize)=>{
    sequelize.define('ptsInteres', {
        nombre:{
            type: Sequelize.STRING,
            allowNull: false,
            primaryKey: true
        },
        atractivo: Sequelize.STRING,
        no_interes: Sequelize.INTEGER
    })
}
module.exports = Interes