const http = require('http') // instanciou o protocolo http
const servidor = require('./config/aplicativo.js') // aqui vai o arquivo que cria o server
const conexao = require('./config/conexao.js')

http.createServer(servidor).listen(servidor.get('porta'), () => { //aqui ele só vai ouvir a porta
    console.log(`Servidor rodando na porta ${server.get('url')}${server.get('porta')}`) //aqui ele vai mostrar na tela
})
