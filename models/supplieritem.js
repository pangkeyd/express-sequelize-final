'use strict';
module.exports = function(sequelize, DataTypes) {
  var SupplierItem = sequelize.define('SupplierItem', {
    SupplierId: DataTypes.INTEGER,
    ItemId: DataTypes.INTEGER,
    price: DataTypes.INTEGER
  });

  SupplierItem.associate = function(models){
    SupplierItem.belongsTo(models.Suppliers, {foreignKey: 'SupplierId'})
    SupplierItem.belongsTo(models.Item, {foreignKey: 'ItemId'})
  }

  return SupplierItem;
};
