const express = require("express")
const sequelize = require('./utils/database')
const touRoutes = require('./routes/turista')
const app = express();
app.use(express.json())

app.use('/turista',touRoutes);

sequelize.sync()
    .then(
        app.listen(8080,()=>{
            console.log("Servidor online en el puerto 8080")
        })
    )
    .catch(err=>console.log(err))