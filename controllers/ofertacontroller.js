const Sequelize = require('sequelize');
const ofertas = require ("../models").ofertaempleo; 

module.exports={
    ListarOfertas(req,res){
        return ofertas.findAll({})
        .then(ofertas => res.status(200).send(ofertas))
        .catch(error => res.status(400).send(error));
    },

    ListarOfertaNombre(req,res){
        return ofertas.findAll({
            where:{
            nombres:req.params.nombres
            }
        })
        .then(ofertas =>res.status(200).send(ofertas))
        .catch(error => res.status(400).send(error));
    },  
    GuardarOferta(req, res){
        let nuevaoferta =  ofertas.create({
             nombres : req.body.nombres, 
             descripcion : req.body.descripcion,
             salario : req.body.salario, 
             horario : req.body.horario, 
             tiempo_estimado : req.body.tiempo_estimado,
             id_usuario : req.body.id_usuario,
            }).then(ofertas => res.status(200).send(ofertas))
            .catch(error => res.status(400).send(error));
      
          return(nuevaoferta.id);
          },
        
          EliminarOferta(req,res) {
            return ofertas.destroy({
              where: {
                  id: req.params.id
                }
          })
          .then(() => res.status(200).send(true))
          .catch(error => res.status(400).send(error));
      },
}