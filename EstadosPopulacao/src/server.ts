import app from '../src/config/custom-express';

const port = 3333;

app.listen( port, ()=>{
  console.log(`Servidor ativo =>> localhost:${port}`)
})