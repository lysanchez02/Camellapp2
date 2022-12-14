const { Model } = require('sequelize');
const Sequelize = require('sequelize');
const registromultimedia = require("../models").registromultimedia;
const categoria = require ("../models").categoria;
const detalleoferta = require ("../models").detalleoferta;
const ofertaempleo = require ("../models").ofertaempleo;
const intereses = require ("../models").intereses;
const postulaciones = require("../models").postulaciones;
const postulantes = require ("../models").postulante;
const registrocatalogo = require ("../models").registrocatalogo;
const empleador = require ("../models").empleador;
const usuario = require ("../models").usuario;
const postulante = require ("../models").postulante;



module.exports=
{
  consultaOfertaxCategoria(req, res) {    
        return ofertaempleo.findAll({
            include: {
               model: detalleoferta,
               include:{
                model: categoria
               }
              },

          })
            .then(ofertaempleo => res.status(200).send(ofertaempleo))
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
            model: ofertaempleo
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
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error));
      
  },
  consultapostulanteXusuario(req, res) {    
    return usuario.findAll({
        include: {
          model: postulante
          }

      })
        .then(usuario => res.status(200).send(usuario))
        .catch(error => res.status(400).send(error));
      
  },
  consultaofertaXempleador(req, res) {    
    return empleador.findAll({
        include: {
          model: ofertaempleo
          }

      })
        .then(empleador => res.status(200).send(empleador))
        .catch(error => res.status(400).send(error.toString()));
      
  },
}