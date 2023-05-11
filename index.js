import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';


const app = express();

db.authenticate()
    .then(() => console.log('Conectado'))
    .catch( error => console.log(error));



const port = process.env.PORT || 4000;

app.set('view engine', 'pug');

app.use(express.static('public'))

app.use( (req, res, next) => {
    res.locals.year = new Date().getFullYear();
    res.locals.nombreSitio = 'Agencia de viajes'    
    return next();
})

// Para enviar datos desde el form
app.use(express.urlencoded({extended: true}))




app.use("/", router);

app.listen(port, ()=>{
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})