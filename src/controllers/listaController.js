const Lista = require('../models').Lista

exports.listAll = (req, res) => {
  Lista.findAll().then(lista => {
    res.send(lista)
  }).catch(error => {
    res.send(error)
  })
}

exports.createOne = (req, res) => {
  console.log(Lista)
  const {titulo, descricao, idUsuario, idCategoria} = req.body
    Lista.create({titulo, descricao, idUsuario, idCategoria})
    .then(lista => { res.send(lista) })
    .catch(error => { res.send(error) })
}