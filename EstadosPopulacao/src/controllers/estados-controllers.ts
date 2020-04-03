import { Request, Response } from 'express';
import EstadosRotas from '../config/interfaces/estados-rotas';
import ibge from '../services/ibge-api';
import clearPayload from '../utils/clearPayload';
import client from '../services/serviceApi'

class EstadosController {
  static rotas(): EstadosRotas {
    return {
      home: '/',
    };
  }

  public async sendEstados(req: Request, res: Response): Promise<Response> {
    const {data : estados} = await ibge.get('/');
    const promises = [];
    var payload = clearPayload(estados)

    for( let item of payload['estados']){
      promises.push(
        new Promise( (resolve, reject) => {
          client.request('rcp', {"uf": item['uf'] }, function(err, response) {
            if(err) throw reject(err);
            item['populacao'] = response.result.populacao;
            resolve()
          })

        })
        
      )
    }
    await Promise.all(promises);
    return res.status(200).json(payload);
  }

}

export default EstadosController;
