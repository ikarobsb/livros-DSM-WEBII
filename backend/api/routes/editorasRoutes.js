const controllers = require('../controllers/editorasControllers.js')

server.get('/editoras', controllers.editorasGetAll)  
server.get('/editoras/:codigo', controllers.editorasGetById) 