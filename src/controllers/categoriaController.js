const Categoria = require('../models').Categoria

exports.listAll = (req, res) => {
  Categoria.findAll().then(categoria => {
    res.send(categoria)
  }).catch(error => {
    res.send('Error')
  })		
}

exports.createOne = (req, res) => {
  console.log(Categoria)
  const {descricao} = req.body
  Categoria.create({descricao})
    .then(categoria => { res.send(categoria) })
    .catch(error => { res.send(error) })
}


