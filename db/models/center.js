'use strict';
module.exports = (sequelize, DataTypes) => {
  var Center = sequelize.define('Center', {
    name: DataTypes.STRING,
    long: DataTypes.INTEGER,
    lat: DataTypes.INTEGER
  }, {
  	underscored: true
  });
  Center.associate = function(models) {
    // associations can be defined here
  };
  return Center;
};