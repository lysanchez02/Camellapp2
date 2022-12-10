'use strict';
const {
  Model
} = require('sequelize');
const usuario = require('./usuario');
module.exports = (sequelize, DataTypes) => {
  class empleador extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      empleador.hasMany(models.usuario, {foreignKey: 'id_empleador'});
    }
  }
  empleador.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    documento: DataTypes.STRING,
    foto_perfil: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,

    id_usuario: DataTypes.INTEGER

  }, 
  {
    sequelize,
    modelName: 'empleador',
    tableName: 'empleador'
  });
  return empleador;
};