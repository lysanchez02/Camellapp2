module.exports = {
up: (queryInterface, Sequelize) =>{
  return queryInterface.bulkInsert('empleador',[
  {
    nombres: "Jhon",
    apellidos: "Capote",
    documento: "456245654",
    foto_perfil: "foto 1",
    nacionalidad: "colombia",
    direccion: "calle 65",
    telefono: "3216548796",
    id_usuario: 1,
  },
  {
    nombres: "Maria",
    apellidos: "Galindez",
    documento: "10589585",
    foto_perfil: "foto 1",
    nacionalidad: "colombia",
    direccion: "calle 65",
    telefono: "3216548796",
    id_usuario: 2,
  },
  {
    nombres: "juan",
    apellidos: "bolaños",
    documento: "105897458",
    foto_perfil: "foto 3",
    nacionalidad: "colombia",
    direccion: "calle 35",
    telefono: "310587496",

    id_usuario: 3,
  },
  
  
  ]);
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('empleador', null, {});
}

};