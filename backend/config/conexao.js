// Conectando com o database
const mysql = require('mysql2')

const database = 'webii221'

const conexao = mysql.createConnection({
    user: 'root',
    password: '21111987Ipa',
    host: 'localhost',
    port: 3306
})

conexao.connect((err) => {
    if(err){
        console.log('Erro ao conectar com o banco de dados: ' + err)
        return
    }
    conexao.query('use ' + database)
    console.log('Conexão com o banco de dados estabelecida com sucesso')})

    module.exports = conexao