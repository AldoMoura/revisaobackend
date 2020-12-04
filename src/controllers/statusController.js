const Status = require('../models').Status

exports.listAll = (req, res) => {
  Status.findAll().then(status => {
    res.send(status)
  }).catch(error => {
    res.send('Error')
  })		
}

exports.createOne = (req, res) => {
  console.log(Status)
  const {descricao} = req.body
  Status.create({descricao})
    .then(status => { res.send(status) })
    .catch(error => { res.send(error) })
}