'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    date: DataTypes.DATE,
    image: DataTypes.STRING,
    content: DataTypes.STRING,
    category: DataTypes.STRING,
    views: DataTypes.NUMBER
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};