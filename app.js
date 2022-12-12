import express from 'express';
//import { db } from './basedatos.js'
//import {shevento} from './contevento.js'
import {router} from './routes/routes.js'


//Se importa un pequeño servidor de express
const app=express();

app.use('/', router);
app.use(express.json())
app.use('/',router);

//router.get('./',shevento);

//Se usa la constante router creadas
router.get('/', (req,res) => {
    res.send("Deploy en Heroku de nuestro Backend ")

} )

//busca el puerto 8000 si esta disponible si no ubica ot puerto 
var PORT= process.env.PORT || 8000;
app.listen(PORT,() =>{
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
})

