import express from 'express';
import { db } from './basedatos.js'
//import {router} from './routes/routes.js'

const router = express.Router();

//Se importa un pequeño servidor de express
const app=express();

app.use('/', router);
app.use(express.json)

//Se usa la constante router creadas
router.get('/', (req,res) => {
    res.send("Hello World from UNAB")

} )

//busca el puerto 8000 si esta disponible si no ubica ot puerto 
var PORT= process.env.PORT || 8000;
app.listen(PORT,() =>{
    console.log(`Se conecto al servidor http://localhost:${PORT}`)
})

