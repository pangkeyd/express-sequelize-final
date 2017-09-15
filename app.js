const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const index = require('./routes/index')
const item = require('./routes/item')
const suppliers = require('./routes/suppliers')
const suppitem = require('./routes/supplierItem')

app.use('/', index)
app.use('/item', item)
app.use('/suppliers', suppliers)
app.use('/supplieritem', suppitem)

app.listen(3000, function(){
  console.log(`AYO JALAN!`);
})
