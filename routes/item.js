const express = require('express')
const routers = express.Router()
const models = require('../models')

routers.get('/', function(req, res){
  res.render('item', {title: 'Item'})
})

routers.get('/tambah', function(req, res){
  
})

module.exports = routers
