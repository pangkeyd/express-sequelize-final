'use strict';
module.exports = function(sequelize, DataTypes) {
  var Suppliers = sequelize.define('Suppliers', {
    name: DataTypes.STRING,
    kota: DataTypes.STRING
  });

  Suppliers.associate = function(models){
    Suppliers.hasMany(models.SupplierItem, {foreignKey: 'SupplierId'})
    Suppliers.belongsToMany(models.Item, {through: models.SupplierItem})
  }

  return Suppliers;
};
