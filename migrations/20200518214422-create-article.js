'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Articles', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      source: {
        allowNull:false,
        type: Sequelize.STRING
      },
      author: {
        allowNull:false,
        type: Sequelize.STRING
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING,
        unique: true
      },
      description: {
        allowNull:false,
        type: Sequelize.STRING,
        unique: true
      },
      url: {
        allowNull:false,
        type: Sequelize.STRING
      },
      image: {
        allowNull:false,
        type: Sequelize.STRING
      },
      published: {
        allowNull:false,
        type: Sequelize.DATE
      },
      content: {
        allowNull:false,
        type: Sequelize.TEXT,
        unique: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Articles');
  }
};