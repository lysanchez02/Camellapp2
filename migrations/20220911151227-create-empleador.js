'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('empleador', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
     },
     nombres: {
       type: Sequelize.STRING
     },
     apellidos: {
       type: Sequelize.STRING
     },
     documento: {
       type: Sequelize.STRING
     },
     foto_perfil: {
       type: Sequelize.STRING
     },
     nacionalidad: {
       type: Sequelize.STRING
     },
     direccion: {
       type: Sequelize.STRING
     },
     telefono: {
       type: Sequelize.STRING
     },

      id_usuario: {
        type: Sequelize.INTEGER,
        references:{
          model: {
            tableName: 'usuario',
          },
          key:'id'
        },
        allowNull: false
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('empleador');
  }
};