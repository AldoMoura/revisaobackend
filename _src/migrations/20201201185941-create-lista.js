'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('tbl_Lista', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      idUsuario: {
        field:"idUsuario",
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model: "Usuarios",
          key: "id"
        }
      },
      idCategoria: {
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
    await queryInterface.dropTable('tbl_Lista');
  }
};