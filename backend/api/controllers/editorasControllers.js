const models = require("../models/editorasModels.js");
module.exports = {
  editorasGetAll,
  editorasGetById,
};

function editorasGetById(req, res) {
    const id = req.params.codigo;
    console.log("Parâmetro recebido", id)
    models.getEditorasById(id, function (err, resposta) {
        console.log("Retorno de autores { M O D E L S }", resposta);
        if (err) {
          throw err;
        } else {
          res.json(resposta);
        }
      });
    }

    function editorasGetAll(req, res) {
      console.log("Rota Editoras");
      models.getAllEditoras(function (err, resposta) {
        console.log("Retorno de editoras por id { M O D E L S }", resposta);
        if (err) {
          throw err;
        } else {
          res.json(resposta);
        }
      });
    }
