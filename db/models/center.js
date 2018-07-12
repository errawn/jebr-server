'use strict';
module.exports = (sequelize, DataTypes) => {
  var Center = sequelize.define('Center', {
    name: {
    	type: DataTypes.STRING,
    	allowNull: false,
    	validate: {
    		min: 2,
    		notEmpty: true
    	}
    },
    long: {
    	type: DataTypes.DOUBLE,
    	allowNull: false,
    	validate: {
    		isFloat: true,
    		notEmpty: true
    	}
    },
    lat: {
    	type: DataTypes.DOUBLE,
    	allowNull: false,
    	validate: {
    		isFloat: true,
    		notEmpty: true
    	}
    }
  }, {

  });
  
  Center.associate = function(models) {
    // associations can be defined here
  };
  return Center;
};