const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const PORT = 3001

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())

app.get('/',(req,res)=> {
    res.send('Hola mundo')
})

const paisesRutas = require('./routes/paises')
app.use('/api/paises', paisesRutas)

mongoose.connect('mongodb://127.0.0.1:27017/mentoria_paises')
.then(()=> console.log('conectado a la base de datos'))
.catch((error) => console.log('error' + error));

app.listen(PORT, ()=> {
    console.log(`escuchando en el puerto: ${PORT}`);
})