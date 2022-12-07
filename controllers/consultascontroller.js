const registromultimedia = require("../models/registromultimedia");
const categoria = require ("../models").categoria;
const detalleoferta = require ("../models").detalleoferta;
const ofertaempleos = require ("../models").ofertaempleo;
const intereses = require ("../models").intereses;
const postulaciones = require("../models").postulaciones;
const postulantes = require ("../models").postulante;
const registrocatalogo = require ("../models").registrocatalogo;
const empleador = require ("../models").empleador;
const usuario = require ("../models").usuario;



module.exports={
  consultaOfertaxCategoria(req, res) {    
        return ofertaempleos.findAll({
            include: {
               model: detalleoferta,
               include:{
                model: categoria
               }
              },

          })
            .then(ofertaempleos => res.status(200).send(ofertaempleos))
            .catch(error => res.status(400).send(error));
          
      },

      
  consultaPostulantesxCategoria(req, res) {    
    return postulantes.findAll({
        include: {
           model: intereses,
           include:{
            model: categoria
           }
          },

      })
        .then(postulantes => res.status(200).send(postulantes))
        .catch(error => res.status(400).send(error));
      
  },

  consultaPostulantesxOfertaempleo(req, res) {    
    return postulantes.findAll({
        include: {
           model: postulaciones,
           include:{
            model: ofertaempleos
           }
          },

      })
        .then(postulantes => res.status(200).send(postulantes))
        .catch(error => res.status(400).send(error));
      
  },

  consultaCatalogoXpostulante(req, res) {    
    return postulantes.findAll({
        include: {
           model: registrocatalogo
          }

      })
        .then(postulantes => res.status(200).send(postulantes))
        .catch(error => res.status(400).send(error));
      
  },

  consultamultimediaXcatalogo(req, res) {    
    return registrocatalogo.findAll({
        include: {
          model: registromultimedia 
          }

      })
        .then(registrocatalogo => res.status(200).send(registrocatalogo))
        .catch(error => res.status(400).send(error));
      
  },

  consultaempleadorXusuario(req, res) {    
    return usuario.findAll({
        include: {
          model: empleador  
          }

      })
        .then(empleador => res.status(200).send(empleador))
        .catch(error => res.status(400).send(error));
      
  },
}