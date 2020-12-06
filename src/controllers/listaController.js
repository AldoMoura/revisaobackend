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

exports.updateOne = (req, res) => {
  const {titulo, descricao, idUsuario, idCategoria} = req.body
  Lista.update({titulo, descricao, idUsuario, idCategoria}, 
                 {where: { id:req.params.id}}).then(lista => {
      res.json({
       message: "Lista atualizada com sucesso",
       data: lista
      })
    }).catch(error => {
      res.send(error)      
  })
} 
exports.deleteOne = (req, res) => {
  Lista.destroy({where: { id:req.params.id}}).then(lista => {
      res.json({
       message: "Lista deletado com sucesso",
       data: Lista
      })
    }).catch(error => {
      res.send(error)      
  })
} 

exports.listOne = (req, res) => {
  Lista.findAll({where: { id:req.params.id}}).then(lista => {
      res.json({
       message: "Lista listado com sucesso",
       data: lista
      })
    }).catch(error => {
      res.send(error)      
  })
}