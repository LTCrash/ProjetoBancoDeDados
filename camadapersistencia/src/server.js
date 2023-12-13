const express = require('express');
const database = require("./src/config/database.js")

// Criar uma instância do Express.js
const app = express();

// Configurar middlewares e rotas do Express.js
const bodyParser = require('body-parser');
const itemController = require("./src/Controller/ItemController.js")
const userController = require('./src/Controller/UserController.js')
const emprestimoController = require('./src/Controller/EmprestimoController.js')
const devolucaoController = require('./src/Controller/DevolucaoController.js')
app.use(bodyParser.json());

app.use('/', itemController);
app.use('/', userController);
app.use('/', emprestimoController);
app.use('/', devolucaoController);
app.use(express.static("front"))

// Iniciar o servidor
const port = (8080);
app.listen(port, () => {
  console.log(`Servidor iniciado na porta ${port}`);
});

database.on('error', (err) => {
  console.error('Erro na conexão com o banco de dados:', err.message);
});