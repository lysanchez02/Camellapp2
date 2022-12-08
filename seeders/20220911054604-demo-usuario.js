module.exports = {
  up: (queryInterface, Sequelize) =>{
    return queryInterface.bulkInsert('usuario',[
      {
      correo: "Jhon@gmail.com",
      contrasena: "123456789"
      },
      {
        correo: "leyder@gmail.com",
        contrasena: "5468795"
        },
      {
        correo: "sebas@gmail.com",
        contrasena: "021597425"
       },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('usuario', null, {});
  }
  
  };