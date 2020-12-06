'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_Atividade', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
      dataPrevista: {
        type: Sequelize.DATEONLY
      },
      dataExecucao: {
        type: Sequelize.DATEONLY
      },
      idLista: {
        type: Sequelize.INTEGER
      },
      idStatus: {
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
    await queryInterface.dropTable('tbl_Atividade');
  }
};