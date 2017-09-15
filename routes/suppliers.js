const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Suppliers.findAll()
  .then(function(supp){
    res.render('suppliers', {data: supp, title: 'Suppliers'})
  })
})

routers.get('/tambah', function(req, res){
  res.render('tambahSuppliers', {title: 'Tambah Suppliers'})
})

routers.post('/tambah', function(req, res){
  models.Suppliers.build({
    name: req.body.nama,
    kota: req.body.kota
  })
  .save().then(function(supp){
    res.redirect('/suppliers')
  })
})

routers.get('/edit/:id', function(req, res){
  models.Suppliers.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(supp){
    res.render('editSuppliers', {data: supp, title: 'Edit Suppliers'})
  })
})

routers.post('/edit/:id', function(req, res){
  models.Suppliers.update({
    name: req.body.nama,
    kota: req.body.kota
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(supp){
    res.redirect('/suppliers')
  })
})

routers.get('/delete/:id', function(req, res){
  models.Suppliers.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(supp){
    res.redirect('/suppliers')
  })
})

module.exports = routers
