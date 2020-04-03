import app from '../src/config/custom-express';

const port = 4000;

app.listen( port, ()=>{
  console.log(`Servidor ativo =>> localhost:${port}`)
})