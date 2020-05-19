'use strict';
module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define('Article', {
    source: DataTypes.STRING,
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    published: DataTypes.DATE,
    content: DataTypes.TEXT
  }, {});
  Article.associate = function(models) {
    // associations can be defined here
  };
  return Article;
};