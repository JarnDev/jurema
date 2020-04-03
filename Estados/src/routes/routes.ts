import express from 'express';
import EstadosRotas from './estados-rotas';

export default (app: express.Application): void => {
  EstadosRotas(app);
};
