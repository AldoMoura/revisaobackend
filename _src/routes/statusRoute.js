module.exports = function (app) {

const statusController = require('../controllers/statusController')

app.route('/statusRoute') 
    .get(statusController.listAll)
    .post(statusController.createOne)		
}
