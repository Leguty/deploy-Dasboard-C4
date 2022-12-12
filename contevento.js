import { evento } from './evento.js';
export const shevento = (req,res) => {

    evento
    .find()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({message:error}));

}
export default shevento;
