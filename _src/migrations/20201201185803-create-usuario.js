'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_Usuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nome: {
        type: Sequelize.STRING
      },
      telefone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      tableName: 'tbl_Usuario',
      freezeTableName: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_Usuario');
  }


};