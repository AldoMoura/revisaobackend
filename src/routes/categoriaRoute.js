module.exports = function (app) {

   const categoriaController = require('../controllers/categoriaController')

app.route('/categoriaRoute') 
    .get(categoriaController.listAll)
    .post(categoriaController.createOne)
}
