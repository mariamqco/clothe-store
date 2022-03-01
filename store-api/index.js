console.log('Nodemon running test');
const express = require('express');
const cors = require('cors');
const connect_DB = require('./config/database');

const PORT = 3000;

const productRouter = require('./routes/product');
const clientRouter = require('./routes/client');



const app = express();
app.use(express.json());
app.use(cors());

connect_DB();

app.get('/',(request,response)=>{
    response.send("Hola mundo");
});

app.use('/api/v1/', productRouter);
app.use('/api/v1/', clientRouter);


app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`)
});

