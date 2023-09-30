const express = require('express');
const mongoose = require('mongoose');
const connectDataBase = require('./database') 
connectDataBase();
const usuariosrutas = require('./router/usuariorutas')
const app = express();

app.use(express.json())

app.use('/api',usuariosrutas)





   

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});
