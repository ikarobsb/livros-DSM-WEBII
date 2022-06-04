const models = require("../models/livrosModels.js");
module.exports = {
  livrosGetAll,
  livrosGetById,
  livrosAi,
  livrosUpdate,
  livrosDelete,
};

function livrosGetById(req, res) {
  const id = req.params.codigo;
  console.log("Parâmetro recebido", id)
  models.getLivrosById(id, function (err, resposta) {
      console.log("Retorno de livros { M O D E L S }", resposta);
      if (err) {
        throw err;
      } else {
        res.json(resposta);
      }
    });
  }

function livrosGetAll(req, res) {
  console.log("Rota Autores");
  models.getAllLivros(function (err, resposta) {
    console.log("Retorno de livros { M O D E L S }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  });
}

function livrosAi(req, res) {
  try {
    const id = req.params.codigo;
    let p_ativo = ""
    console.log("Ativar / Inativar", id)
    models.getLivrosById(id, function (err, resp){
      const livro = resp[0]
      console.log("Retorno de autores { M O D E L S }", id, livro.liv_titulo)
      console.log("Registro banco A/I: " + livro.liv_ativoinativo)
      p_ativo = livro.liv_ativoinativo
      if(err){
        throw err;
      } else {
        if(p_ativo == 'A'){
          p_ativo = 'I'
        } else {
          p_ativo = 'A'
        }
        console.log("Registro A/I: " + p_ativo)

        models.Ailivros(id, p_ativo, function (err, resposta) {
          if (err) {
            throw err;
          } else {
            console.log('Processo A/I realizado com sucesso!')
            const livroAtualizado = models.getLivrosById(id, function (err, _res) { return res.json(_res)})
          }
        });
      }
    });
  } catch (error) {
    console.log(error)
  }
}

function livrosUpdate (req, res) {
  const id = req.params.codigo
  const dados = req.body;

  console.log('Atualização de LIVROS MODELS' + id)
  console.log(dados)

  models.updateLivros(id, dados, function (err, resposta) {
    console.log("Retorno de livros { M O D E L S }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  })
}


function livrosDelete (req, res) {
  const id = req.params.codigo
  console.log('Exclusão de livros MODELS' + id)

  models.deleteLivros(id, function (err, resposta) {
    console.log("Retorno de livros { M O D E L S }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  })
}