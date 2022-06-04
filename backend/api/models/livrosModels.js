 
const conexao = require('../../config/conexao.js')

module.exports = {
    getAllLivros,
    getLivrosById,
    Ailivros,
    updateLivros,
    deleteLivros,
}

function getAllLivros(callback) {
    conexao.query('SELECT * FROM livros', callback)
}

function getLivrosById(id, callback) {
    conexao.query(`select * from livros where liv_codigo = ${id}`, callback)
}

function Ailivros (id, p_ativo, callback) {
    conexao.query(
        `update livros set liv_ativoinativo = '${p_ativo}' where liv_codigo = ${id}`,
        callback
    )
}

function updateLivros (id, dados, callback) {
    const p_sql =
      "update livros set liv_titulo = '" +
      dados.liv_titulo +
      "', liv_ativoinativo = '" +
      dados.liv_ativoinativo +
      "', liv_edicao = '" +
      dados.liv_edicao +
      "', liv_isbn = '" +
      dados.liv_isbn +
      "', liv_ano = '" + dados.liv_ano +
      "' where liv_codigo = '" +
      id +
      "'";
  
    console.log("Atualização Livros/Update \n" + p_sql);
    conexao.query(p_sql, callback);
  }

  function deleteLivros (id, callback) {
    conexao.query(`delete from livros where liv_codigo = ${id}`, callback);
  }
