'use strict';
const {
  Model
} = require('sequelize');
const intereses = require('./intereses');
const postulaciones = require('./postulaciones');
const registrocatalogo = require('./registrocatalogo');
module.exports = (sequelize, DataTypes) => {
  class postulante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      postulante.hasMany(models.intereses, {foreignKey: 'id_postulante'});
      postulante.hasMany(models.postulaciones, {foreignKey: 'id_postulante'});
      postulante.hasMany(models.registrocatalogo, {foreignKey: 'id_postulante'});
    }
  }
  postulante.init({
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
    disponibilidad: DataTypes.STRING,
    nacionalidad: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    correo: DataTypes.STRING,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'postulante',
    tableName: 'postulante'
  });
  return postulante;
};