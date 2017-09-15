const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.SupplierItem.findAll({
    attributes: ['id'],
    include: [{
      model: models.Suppliers,
      include: [
        models.Item
      ]
    }]
  })
  .then(function(alldata){
    // res.send(alldata)
    res.render('supplierItem', {data: alldata, title: 'All Data'})
  })
})

routers.get('/tambah', function(req, res){
  models.Suppliers.findAll()
  .then(function(supp){
    models.Item.findAll()
    .then(function(item){
      res.render('tambahSupplierItem', {data: supp, dataItem: item, title: 'Tambah Data'})
    })
  })
})

routers.post('/tambah', function(req, res){
  models.SupplierItem.build({
    SupplierId: req.body.supp,
    ItemId: req.body.item,
    price: req.body.price
  })
  .save().then(function(all){
    // res.send(all)
    res.redirect('/supplieritem')
  })
})

module.exports = routers
