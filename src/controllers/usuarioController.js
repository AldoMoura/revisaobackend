const Usuario = require('../models').Usuario

exports.listAll = (req, res) => {
  Usuario.findAll().then(usuarios => {
    res.send(usuarios)
  }).catch(error => {
    res.send('Error')
  })		
}

exports.createOne = (req, res) => {
  console.log(Usuario)
  const {nome, telefone, email} = req.body
  Usuario.create({nome, telefone, email})
    .then(usuario => { res.send(usuario) })
    .catch(error => { res.send(error) })
}

exports.listOne = (req, res) => {
  Usuario.findById(req.params.id, (error, usuario) => {
    if (error) {
      res.send(error)
    } else {
      res.json({
        message: "Usuario listado com sucesso",
        data: usuario
      })
    } 
  })
}

exports.updateOne = (req, res) => {
  Usuario.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, (error, receita) => {
    if (error) {
      res.send(error)
    } else {
        res.json({
        message: "Receita atualizada com sucesso",
        data: usuario
      })
    } 
  })
}


exports.deleteOne = (req, res) => {
  Usuario.destroy({where: { id:req.params.id}}).then(usuario => {
      res.json({
       message: "Usuario deletado com sucesso",
       data: usuario
      })
    }).catch(error => {
      res.send(error)      
  })
} 

