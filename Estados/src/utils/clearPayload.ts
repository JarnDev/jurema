export default (estados:any) =>{
  const payload = { 'estados': []};
  for( let estado of estados){
    let { nome, sigla } = estado
    payload['estados'].push({"nome": nome,'uf': sigla})
  }
  return payload
}