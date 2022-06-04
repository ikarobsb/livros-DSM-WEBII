const models = require("../models/autoresModels.js");
module.exports = {
  autoresGetAll,
  autoresGetById,
  autoresAi,
  autoresUpdate,
  autoresDelete
};

function autoresGetAll(req, res) {
  console.log("Rota Autores");
  models.getAllAutores(function (err, resposta) {
    console.log("Retorno de autores { M O D E L S }", resposta);
    if (err) {
      throw err;
    } else {
      res.json(resposta);
    }
  });
}

function autoresGetById(req, res) {
    const id = req.params.codigo;
    console.log("Parâmetro recebido", id)
    models.getAutoresById(id, function (err, resposta) {
        console.log("Retorno de autores { M O D E L S }", resposta);
        if (err) {
          throw err;
        } else {
          res.json(resposta);
        }
      });
    }

    function autoresAi(req, res) {
      try {
        const id = req.params.codigo;
        let p_ativo = ""
        console.log("Ativar / Inativar", id)
        models.getAutoresById(id, function (err, resp){
          const autor = resp[0]
          console.log("Retorno de autores { M O D E L S }", id, autor.aut_nome)
          console.log("Registro banco A/I: " + autor.aut_ativoinativo)
          p_ativo = autor.aut_ativoinativo
          if(err){
            throw err;
          } else {
            if(p_ativo == 'A'){
              p_ativo = 'I'
            } else {
              p_ativo = 'A'
            }
            console.log("Registro A/I: " + p_ativo)
  
            models.Aiautores(id, p_ativo, function (err, resposta) {
              if (err) {
                throw err;
              } else {
                console.log('Processo A/I realizado com sucesso!')
                const autorAtualizado = models.getAutoresById(id, function (err, _res) { return res.json(_res)})
              }
            });
          }
        });
      } catch (error) {
        console.log(error)
      }
    }

    function autoresUpdate (req, res) {
      const id = req.params.codigo
      const dados = req.body;

      console.log('Atualização de autores MODELS' + id)
      console.log(dados)

      models.updateAutores(id, dados, function (err, resposta) {
        console.log("Retorno de autores { M O D E L S }", resposta);
        if (err) {
          throw err;
        } else {
          res.json(resposta);
        }
      })
    }

    function autoresDelete (req, res) {
      const id = req.params.codigo
      console.log('Exclusão de autores MODELS' + id)

      models.deleteAutores(id, function (err, resposta) {
        console.log("Retorno de autores { M O D E L S }", resposta);
        if (err) {
          throw err;
        } else {
          res.json(resposta);
        }
      })
    }