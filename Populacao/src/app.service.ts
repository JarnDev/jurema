import { Injectable } from '@nestjs/common';
import axios from 'axios'
import estadosLocation from './data';
@Injectable()
export class AppService {

  async onModuleInit() {
    //Inicia lista de ID por UF, para buscas de populcao pela API do IBGE, poderia ser salvo em banco pra uso futuro.
    const {data : estados} =  await axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    for(let estado of estados){
      let { id, sigla } = estado
      estadosLocation[sigla] = id
    }
    console.log(`ID dos Estados Carregado!`);
  }

  async getPopulacao(uf:string): Promise<Object> {
    if(!estadosLocation[uf]){
      return { error: 'Estado Inexistente!'}
    }
    const {data : info} =  await axios.get(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${estadosLocation[uf]}`)
    return {'uf':uf, 'populacao': info.projecao.populacao};
  }
}
