import { Request, Response } from 'express';
import EstadosRotas from '../config/interfaces/estados-rotas'
import ibge from '../services/ibge-api';
import clearPayload from '../utils/clearPayload'

class EstadosController {
  static rotas(): EstadosRotas {
    return {
      home: '/',
    };
  }

  public async sendEstados(req: Request, res: Response): Promise<Response> {
    const {data : estados} = await ibge.get('/');
    
    var payload = clearPayload(estados)

    return res.status(200).json(payload);
  }

}

export default EstadosController;
