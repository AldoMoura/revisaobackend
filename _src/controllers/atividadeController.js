const Atividade = require('../models').Atividade

exports.listAll = (req, res) => {
  Atividade.findAll().then(atividade => {
    res.send(atividade)
  }).catch(error => {
    res.send('Error')
  })
}

exports.createOne = (req, res) => {
  console.log(Atividade)
  const {descricao, dataPrevista, dataExecucao, idLista, idStatus} = req.body
    Atividade.create({descricao, dataPrevista, dataExecucao, idLista, idStatus})
    .then(atividade => { res.send(atividade) })
    .catch(error => { res.send(error) })
}