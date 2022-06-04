const conexao = require("../../config/conexao.js");

module.exports = {
  getEditorasById,
  getAllEditoras,
};

function getEditorasById(id, callback) {
  conexao.query(`select * from editoras where edt_codigo = ${id}`, callback);
}

function getAllEditoras(callback) {
  conexao.query(`select * from editoras`, callback);
}
