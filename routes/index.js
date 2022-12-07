var express = require('express');
var router = express.Router();

const Sequelize = require('sequelize');
const empleadores = require ('../models').empleador;
const postulantes = require ('../models').postulante; 
const ofertas = require ('../models').ofertaempleo; 

/* GET users listing. */

const controladorEmpleador = require ('../controllers/empladorcontroller');
const controladorPostulante = require ('../controllers/postulantecontroller');
const controladorofertaempleo = require ('../controllers/ofertaempleocontroller');
const contoladorConsultas = require ('../controllers/consultascontroller');


/*rutas tabla empleador*/

router.get('/ListarEmpleador', controladorEmpleador.ListarEmpleador);
router.get('/empleador/:id', controladorEmpleador.ListarId);
router.post('/GuardarEmpleador', controladorEmpleador.GuardarEmpleador);
router.delete('/eliminarempleador/:id', controladorEmpleador.EliminarEmpleador);

/*rutas tabla ofertasempleo*/

router.get('/consultaOfertas', controladorofertaempleo.consultaOfertas);
router.get('/ofertasdeempleo/:id', controladorofertaempleo.ListarId11);
router.post('/Guardarofertaempleo', controladorofertaempleo.Guardarofertaempleo);
router.delete('/eliminarofertaempleo/:id', controladorofertaempleo.Eliminarofertaempleo);

/*rutas tabla postulante*/

router.get('/ListarPostulante', controladorPostulante.ListarPostulante);
router.get('/postulante/:id', controladorPostulante.ListarId2);
router.post('/GuardarPostulante', controladorPostulante.GuardarPostulante);
router.delete('/eliminarpostulante/:id', controladorPostulante.EliminarPostulante);

/*
router.get('/ListarOfertaNombre/:nombres',controladorOfertas.ListarOfertaNombre);
router.get('/ListarOfertas',controladorOfertas.ListarOfertas);
router.post('/GuardarOferta', controladorOfertas.GuardarOferta);
router.delete('/EliminarOferta/:id', controladorOfertas.EliminarOferta);
*/

/*rutas de consultas*/

router.get('/consultaOfertaCategoria', contoladorConsultas.consultaOfertaxCategoria);
router.get('/consultaPostulantexCategoria', contoladorConsultas.consultaPostulantesxCategoria);
router.get('/consultaPostulantesxOfertaempleo', contoladorConsultas.consultaPostulantesxOfertaempleo);
router.get('/consultaCatalogoXpostulante', contoladorConsultas.consultaPostulantesxOfertaempleo);
router.get('/consultamultimediaXcatalogo', contoladorConsultas.consultamultimediaXcatalogo);
router.get('/consultaempleadorXusuario', contoladorConsultas.consultaempleadorXusuario);
module.exports = router;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  

