'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_AtividadeUsuario', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAtividade: {
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    },
    {
      freezeTableName: true
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('tbl_AtividadeUsuario');
  }
};