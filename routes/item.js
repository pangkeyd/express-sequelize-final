const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.Item.findAll()
  .then(function(item){
    res.render('item', {data: item, title: 'Item'})
  })
})

routers.get('/tambah', function(req, res){
  res.render('tambahItem', {title: 'Tambah Item'})
})

routers.post('/tambah', function(req, res){
  models.Item.build({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  })
  .save().then(function(item){
    res.redirect('/item')
  })
})

routers.get('/edit/:id', function(req, res){
  models.Item.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(function(item){
    res.render('editItem', {data: item, title: 'Edit Item'})
  })
})

routers.post('/edit/:id', function(req, res){
  models.Item.update({
    name: req.body.name,
    brand: req.body.brand,
    codeitem: req.body.codeitem
  },
  {
    where: {
      id: req.params.id
    }
  })
  .then(function(item){
    res.redirect('/item')
  })
})

routers.get('/delete/:id', function(req, res){
  models.Item.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(function(item){
    res.redirect('/item')
  })
})

module.exports = routers
