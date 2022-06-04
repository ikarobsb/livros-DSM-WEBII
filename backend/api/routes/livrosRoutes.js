const controllers = require('../controllers/livrosControllers.js')

server.get('/livros', controllers.livrosGetAll)   

server.get('/livros/:codigo', controllers.livrosGetById)

server.get('/livros/ai/:codigo', controllers.livrosAi) // FUNCIONANDO

server.put('/livros/:codigo', controllers.livrosUpdate) // FUNCIONANDO

server.delete('/livros/:codigo', controllers.livrosDelete)