module.exports = function (app) {

   const listaController = require('../controllers/listaController')

app.route('/listaRoute') 
     .get(listaController.listAll)
     .post(listaController.createOne)
}
