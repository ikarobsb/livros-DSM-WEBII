const express = require('express')
const consign = require('consign') // importando uma biblioteca que vai fazer o carregamento automatico de todos os arquivos
const body = require('body-parser')
const cors = require('cors') // comunicacao entre front e backend

server = express();

server.set('url', 'http://localhost:') // variavel do express
server.set('porta', 3001)

server.use(body.json())

consign({cwd: 'api'}) // na pasta api, vai trazer esses três diretórios (comando cwd)
    .include('models')
    .then('controllers')
    .then('routes')
    .into(server)
;

module.exports = server