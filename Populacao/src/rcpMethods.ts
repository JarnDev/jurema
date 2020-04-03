import axios from 'axios'
import estadosLocation from './data';


export default {
  rcp: async function(args, callback) {
      var {uf} = args
      if(!uf){
        callback(null, { error: 'UF nao informado!'})
      }else{
        uf = String(uf).toUpperCase()
        if(!estadosLocation[uf]){
          callback(null, { error: 'Estado Inexistente!'})
        }else{
          const {data : info} =  await axios.get(`https://servicodados.ibge.gov.br/api/v1/projecoes/populacao/${estadosLocation[uf]}`)
          callback(null, {'uf':uf, 'populacao': info.projecao.populacao})
        }
      }
  }
}
