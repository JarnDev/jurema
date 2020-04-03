import express from 'express';
import EstadosController from '../controllers/estados-controllers';

const estadosControler = new EstadosController();
const EstadosRotas = EstadosController.rotas();

export default (app: express.Application): void => {
  app.get(EstadosRotas.home, estadosControler.sendEstados);
};
