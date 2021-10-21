const Sequelize = require('sequelize');
const Interes = (sequelize)=>{
    sequelize.define('ptsInteres', {
        id:{
            type: Sequelize.INTEGER,
            allowNull: false,
            primaryKey: true
        },
        nombre: Sequelize.STRING,
        atractivo: Sequelize.STRING,
        no_interes: Sequelize.INTEGER
    })
}
module.exports = Interes