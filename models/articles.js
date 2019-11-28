'use strict';
module.exports = (sequelize, DataTypes) => {
  const Articles = sequelize.define('Articles', {
    title: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    author:{
      type: DataTypes.STRING,
      allowNull:false,
    },
    published:{
      type: DataTypes.DATE,
      default: Date.now()
    },
    category:{
      type:DataTypes.STRING,
      allowNull:false,
      default:'politics'
    },
    content:{
      type: DataTypes.STRING,
      allowNull:false
    },
    picture: {
      type:DataTypes.STRING
    }
  }, {});
  Articles.associate = function(models) {
    // associations can be defined here
  };
  return Articles;
};
