module.exports = function (app) {

const atividadeController = require('../controllers/atividadeController')

app.route('/atividadeRoute') 
     .get(atividadeController.listAll)
     .post(atividadeController.createOne)
}

