const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  models.SupplierItem.findAll({
    include: [{
      model: models.Suppliers,
      include: [
        models.Item
      ]
    }]
  })
  .then(function(alldata){
    res.render('supplierItem', {data: alldata, title: 'All Data'})
  })
})

module.exports = routers
